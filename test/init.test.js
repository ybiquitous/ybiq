import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { test } from "node:test";
import { init } from "../lib/init.js";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

const readJSON = (file) => JSON.parse(readFileSync(file, "utf8"));

const sandbox = async (callback) => {
  const workDir = join(tmpdir(), `${pkg.name}${process.hrtime.bigint()}`);
  mkdirSync(workDir);

  const logMsgs = [];
  const logger = (msg) => logMsgs.push(msg);

  try {
    const cwd = process.cwd();
    const fixturePath = (name) => join(cwd, "test", "fixtures", name);
    const fixture = (name) => {
      const src = fixturePath(name);
      const dest = join(workDir, "package.json");
      copyFileSync(src, dest);
      return dest;
    };

    return await callback({
      fixture,
      workDir,
      readWorkFile: (name) => readFileSync(join(workDir, name), "utf8"),
      logMessage: () => logMsgs.join(""),
      initArgs: { cwd: workDir, logger },
    });
  } finally {
    rmSync(workDir, { recursive: true });
  }
};

test('update "package.json"', (t) =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-normal.json");
    await init(ctx.initArgs);
    t.assert.snapshot(readJSON(src));
  }));

test('update "package.json" without fields', (t) =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-empty.json");
    await init(ctx.initArgs);
    t.assert.snapshot(readJSON(src));
  }));

test("remove `overrides` for `conventional-changelog-conventionalcommits`", (t) =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-overrides.json");
    await init(ctx.initArgs);
    t.assert.deepStrictEqual(readJSON(src).overrides, { foo: "1.2.3" });
  }));

test("remove empty `overrides` after dropping `conventional-changelog-conventionalcommits`", (t) =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-normal.json");
    writeFileSync(
      src,
      JSON.stringify({ overrides: { "conventional-changelog-conventionalcommits": "^9.1.0" } }),
    );
    await init(ctx.initArgs);
    t.assert.ok(!("overrides" in readJSON(src)));
  }));

[
  [".editorconfig", true],
  [".githooks/commit-msg", true],
  [".githooks/pre-commit", true],
  [".github/workflows/dependabot-auto-merge.yml", true],
  [".github/workflows/npm-audit-fix.yml", true],
  [".github/workflows/npm-diff.yml", true],
  [".github/workflows/release.yml", true],
  [".github/workflows/test.yml", true],
  ["eslint.config.js", false],
].forEach(([file, inPackageJson]) => {
  test(`write "${file}"`, (t) =>
    sandbox(async (ctx) => {
      ctx.fixture("package-normal.json");
      await init(ctx.initArgs);
      t.assert.ok(ctx.logMessage().includes("[32m'package.json'[39m was updated"));
      t.assert.snapshot(ctx.readWorkFile(file));
    }));

  if (inPackageJson) {
    test(`contain "${file}" in package.json`, (t) => {
      t.assert.ok(pkg.files.includes(file));
    });
  }
});

test("throw error if no package.json", (t) =>
  sandbox(async (ctx) => {
    await t.assert.rejects(init(ctx.initArgs), (error) => {
      t.assert.strictEqual(error.code, "ENOENT");
      return true;
    });
  }));

test("End-to-End via CLI", (t) =>
  sandbox(async (ctx) => {
    ctx.fixture("package-normal.json");
    const { stdout, stderr } = await exec(resolve(pkg.bin), "init", {
      cwd: ctx.initArgs.cwd,
    });
    t.assert.snapshot(stdout);
    t.assert.strictEqual(stderr, "");
  }));

test("remove `.husky/` if exists", (t) =>
  sandbox(async (ctx) => {
    mkdirSync(join(ctx.workDir, ".husky"));
    writeFileSync(join(ctx.workDir, ".husky", ".gitignore"), "_");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    t.assert.strictEqual(existsSync(join(ctx.workDir, ".husky")), false);
  }));

test("remove `.github/workflows/commitlint.yml` if exists", (t) =>
  sandbox(async (ctx) => {
    mkdirSync(join(ctx.workDir, ".github", "workflows"), { recursive: true });
    writeFileSync(join(ctx.workDir, ".github", "workflows", "commitlint.yml"), "dummy: 1");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    t.assert.strictEqual(
      existsSync(join(ctx.workDir, ".github", "workflows", "commitlint.yml")),
      false,
    );
  }));

test("remove `.remarkignore` if it only ignores `CHANGELOG.md`", (t) =>
  sandbox(async (ctx) => {
    writeFileSync(join(ctx.workDir, ".remarkignore"), "CHANGELOG.md\n");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    t.assert.strictEqual(existsSync(join(ctx.workDir, ".remarkignore")), false);
  }));

test("keep `.remarkignore` if it ignores other files", (t) =>
  sandbox(async (ctx) => {
    writeFileSync(join(ctx.workDir, ".remarkignore"), "CHANGELOG.md\ndocs/\n");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    t.assert.strictEqual(existsSync(join(ctx.workDir, ".remarkignore")), true);
  }));
