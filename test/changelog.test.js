import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { test } from "node:test";
import { changelog } from "../lib/changelog.js";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

const HEADER = "# Changelog";
const COMMENT = "<!-- lint disable no-duplicate-headings -->";
const TOP = `${HEADER}\n\n${COMMENT}\n\n`;

const sandbox = async (callback) => {
  const dir = join(tmpdir(), `${pkg.name}-changelog-${process.hrtime.bigint()}`);
  mkdirSync(dir);
  try {
    return await callback(dir);
  } finally {
    rmSync(dir, { recursive: true });
  }
};

test("normalize and format the generated file", (t) =>
  sandbox(async (dir) => {
    const file = join(dir, "CHANGELOG.md");
    // Simulate conventional-changelog prepending a release above the existing header.
    const generate = async () =>
      `## [2.0.0](https://x) (2026)\n\n### Features\n\n- new\n\n${TOP}## [1.0.0](https://x) (2025)\n\n### Bug Fixes\n\n- old\n`;

    await changelog({ cwd: dir, generate });

    const content = readFileSync(file, "utf8");
    t.assert.ok(existsSync(file));
    t.assert.ok(content.startsWith(`${TOP}## [2.0.0]`));
    t.assert.strictEqual(content.match(/^# Changelog$/gm).length, 1);
  }));

test("with dryRun print the result without writing the file", (t) =>
  sandbox(async (dir) => {
    const file = join(dir, "CHANGELOG.md");
    const generate = async () => `## [1.0.0](https://x) (2026)\n\n### Features\n\n- new\n`;
    /** @type {string[]} */
    const lines = [];
    const logger = (msg) => lines.push(msg);

    await changelog({ cwd: dir, generate, dryRun: true, logger });

    t.assert.strictEqual(existsSync(file), false);
    const output = lines.join("\n");
    t.assert.ok(output.startsWith(`${TOP}## [1.0.0]`));
    t.assert.ok(output.includes("- new"));
  }));

test("propagate generator failures", async (t) => {
  await sandbox(async (dir) => {
    const generate = async () => {
      throw new Error("boom");
    };
    await t.assert.rejects(changelog({ cwd: dir, generate }), /boom/u);
  });
});

test("End-to-End via CLI", (t) =>
  sandbox(async (dir) => {
    const git = (...args) => execFileSync("git", args, { cwd: dir });

    git("init", "--quiet");
    git("config", "user.email", "test@example.com");
    git("config", "user.name", "Test");
    writeFileSync(
      join(dir, "package.json"),
      JSON.stringify({ name: "e2e-fixture", version: "0.0.0", repository: "ybiquitous/ybiq" }),
    );
    git("add", "package.json");
    git("commit", "--quiet", "-m", "feat: initial commit");

    const { stdout, stderr } = await exec(resolve(pkg.bin), "changelog", "--dry-run", { cwd: dir });

    t.assert.strictEqual(stderr, "");
    t.assert.ok(stdout.startsWith(TOP));
    t.assert.ok(stdout.includes("initial commit"));
  }));
