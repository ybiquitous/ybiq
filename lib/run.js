import { spawn } from "node:child_process";
import { styleText } from "node:util"; // eslint-disable-line n/no-unsupported-features/node-builtins

/** @import { RunCommand, RunResult, RunLabeler } from "../types/ybiq.d.ts"; */

const COLORS = Object.freeze(["blue", "cyan", "green", "magenta", "red", "yellow"]);

/** @type {RunLabeler} */
const defaultLabeler = (script) => script;

/**
 * @param {{ label: string, color: string, data: unknown, dest: NodeJS.WriteStream }} params
 */
function output({ label, color, data, dest }) {
  const dataStr = String(data);
  if (dataStr === "") return;

  // @ts-expect-error -- TS2345: Argument of type 'string' is not assignable
  const coloredLabel = styleText(color, `[${label}]`);

  dataStr
    .replace(/\r?\n/u, "")
    .split("\n")
    .forEach((line) => {
      dest.write(`${coloredLabel} ${line}\n`);
    });
}

/**
 * @param {{ script: string, color: string, labeler: RunLabeler, stdout: NodeJS.WriteStream, stderr: NodeJS.WriteStream }} params
 * @returns {Promise<RunResult>}
 */
function runScript({ script, color, labeler, stdout, stderr }) {
  return new Promise((resolve) => {
    const childProcess = spawn(script, { shell: true, stdio: "pipe" });

    childProcess.stdout.on("data", (data) => {
      output({ label: labeler(script), color, data, dest: stdout });
    });

    childProcess.stderr.on("data", (data) => {
      output({ label: labeler(script), color, data, dest: stderr });
    });

    childProcess.on("close", (code) => {
      if (code === 0) {
        resolve({ script, success: true, code, error: undefined });
      } else {
        resolve({ script, success: false, code: code || undefined, error: undefined });
      }
    });
  });
}

/** @type {RunCommand} */
export async function run({
  scripts,
  labeler = defaultLabeler,
  stdout = process.stdout,
  stderr = process.stderr,
}) {
  // Rotate colors for each script label
  const results = await Promise.allSettled(
    scripts.map((script) => {
      const color = COLORS[scripts.indexOf(script) % COLORS.length] ?? "cyan";
      return runScript({ script, color, labeler, stdout, stderr });
    }),
  );

  return {
    success: results.every((res) => res.status === "fulfilled" && res.value.success),
    results: results.map((res) => (res.status === "fulfilled" ? res.value : res.reason)),
  };
}

export const command = "run <scripts..>";
export const describe = "Run scripts in parallel";

/** @param {{ scripts: string[] }} args */
export async function handler(args) {
  await run({ scripts: args.scripts });
}
