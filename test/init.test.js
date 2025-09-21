import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
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

test('update "package.json"', () =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-normal.json");
    await init(ctx.initArgs);
    expect(readJSON(src)).toMatchSnapshot();
  }));

test('update "package.json" without fields', () =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-empty.json");
    await init(ctx.initArgs);
    expect(readJSON(src)).toMatchSnapshot();
  }));

[
  ".editorconfig",
  ".remarkignore",
  ".github/workflows/dependabot-auto-merge.yml",
  ".github/workflows/npm-audit-fix.yml",
  ".github/workflows/npm-diff.yml",
  ".github/workflows/release.yml",
  ".github/workflows/test.yml",
  ".husky/commit-msg",
  ".husky/pre-commit",
].forEach((file) => {
  test(`write "${file}"`, () =>
    sandbox(async (ctx) => {
      ctx.fixture("package-normal.json");
      await init(ctx.initArgs);
      expect(ctx.logMessage()).toMatch("[32m'package.json'[39m was updated");
      expect(ctx.readWorkFile(file)).toMatchSnapshot();
    }));

  test(`contain "${file}" in package.json`, () => {
    expect(pkg.files).toContain(file);
  });
});

test("throw error if no package.json", () =>
  sandbox(async (ctx) => {
    await expect(init(ctx.initArgs)).rejects.toHaveProperty("code", "ENOENT");
  }));

test("End-to-End via CLI", () =>
  sandbox(async (ctx) => {
    ctx.fixture("package-normal.json");
    const { stdout, stderr } = await exec(resolve(pkg.bin), "init", {
      cwd: ctx.initArgs.cwd,
    });
    expect(stdout).toMatchInlineSnapshot(`
      "=> [32m'package.json'[39m was updated
      => [32m'.editorconfig'[39m was updated
      => [32m'.remarkignore'[39m was updated
      => [32m'.github/workflows/dependabot-auto-merge.yml'[39m was updated
      => [32m'.github/workflows/npm-audit-fix.yml'[39m was updated
      => [32m'.github/workflows/npm-diff.yml'[39m was updated
      => [32m'.github/workflows/release-pr.yml'[39m was updated
      => [32m'.github/workflows/release.yml'[39m was updated
      => [32m'.github/workflows/test.yml'[39m was updated
      => [32m'.husky/commit-msg'[39m was updated
      => [32m'.husky/pre-commit'[39m was updated
      => [32m'.husky/.gitignore'[39m was removed
      => [32m'.github/workflows/commitlint.yml'[39m was removed
      => [32m'.husky/post-commit'[39m was removed
      "
    `);
    expect(stderr).toEqual("");
  }));

test("Remove `.husky/.gitignore` if exists", () =>
  sandbox(async (ctx) => {
    mkdirSync(join(ctx.workDir, ".husky"));
    writeFileSync(join(ctx.workDir, ".husky", ".gitignore"), "_");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    expect(existsSync(join(ctx.workDir, ".husky", ".gitignore"))).toEqual(false);
  }));

test("Remove `.github/workflows/commitlint.yml` if exists", () =>
  sandbox(async (ctx) => {
    mkdirSync(join(ctx.workDir, ".github", "workflows"), { recursive: true });
    writeFileSync(join(ctx.workDir, ".github", "workflows", "commitlint.yml"), "dummy: 1");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    expect(existsSync(join(ctx.workDir, ".github", "workflows", "commitlint.yml"))).toEqual(false);
  }));
