import { spawn } from "node:child_process";
import { styleText } from "node:util"; // eslint-disable-line n/no-unsupported-features/node-builtins

/** @import { RunCommand, RunResult, RunLabeler } from "../types/ybiq.d.ts"; */

/** @typedef {"blue" | "cyan" | "green" | "magenta" | "red" | "yellow"} Color */
/** @typedef {Parameters<typeof styleText>[0]} Styles */

/** @type {readonly Color[]} */
const COLORS = Object.freeze(["blue", "cyan", "green", "magenta", "red", "yellow"]);

/** @type {RunLabeler} */
const defaultLabeler = (script) => script;

/**
 * @param {{ styles: Styles; text: string; stream: NodeJS.WriteStream }} params
 * @returns {string}
 */
function checkAndStyleText({ styles, text, stream }) {
  if (typeof stream.hasColors === "function" && stream.hasColors()) {
    return styleText(styles, text, { stream });
  }
  return text;
}

/**
 * @param {{ label: string, color: Color, data: unknown, dest: NodeJS.WriteStream }} params
 */
function output({ label, color, data, dest }) {
  const dataStr = String(data);
  if (dataStr === "") return;

  const coloredLabel = checkAndStyleText({ styles: color, text: `[${label}]`, stream: dest });

  dataStr
    .replace(/\r?\n/u, "") // Remove the first newline to avoid an extra blank line
    .split("\n")
    .forEach((line) => {
      dest.write(`${coloredLabel} ${line}\n`);
    });
}

/**
 * @param {{
 *   script: string;
 *   color: Color;
 *   labeler: RunLabeler;
 *   stdout: NodeJS.WriteStream;
 *   stderr: NodeJS.WriteStream;
 * }} params
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
  npm = false,
  labeler = defaultLabeler,
  stdout = process.stdout,
  stderr = process.stderr,
}) {
  // Rotate colors for each script label
  const results = await Promise.allSettled(
    scripts.map((originalScript, index) => {
      const script = npm ? `npm run ${originalScript}` : originalScript;
      /** @type {Color} */
      const color = COLORS[index % COLORS.length] ?? "cyan";
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

/** @satisfies {import('yargs').CommandBuilder} */
export const builder = {
  npm: {
    type: "boolean",
    default: false,
    description: "Whether to treat scripts as npm ones",
  },
};

/** @param {import('yargs').ArgumentsCamelCase<{ scripts: string[]; npm: boolean }>} args */
export async function handler(args) {
  const { success, results } = await run({ scripts: args.scripts, npm: args.npm });

  if (!success) {
    const stream = process.stderr;
    /** @type {(styles: Styles, text: string) => string}*/
    const styleError = (styles, text) => checkAndStyleText({ styles, text, stream });

    console.error(""); // Blank line for better readability
    console.error(styleError("bgRed", "Failed:"));
    for (const result of results) {
      if (!result.success) {
        console.error(
          `${styleError("dim", "-")} ${styleError(["red", "bold"], result.script)} ${styleError("dim", `(exit code: ${result.code ?? "unknown"})`)}`,
        );
      }
    }
  }

  process.exit(success ? 0 : 1); // eslint-disable-line n/no-process-exit
}
