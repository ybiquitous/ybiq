import { copyFileSync, mkdirSync, readFileSync, rmdirSync } from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";
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
      readWorkFile: (name) => readFileSync(join(workDir, name), "utf8"),
      logMessage: () => logMsgs.join(""),
      initArgs: { cwd: workDir, logger },
    });
  } finally {
    rmdirSync(workDir, { recursive: true });
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
  ".github/workflows/commitlint.yml",
  ".github/workflows/npm-audit-fix.yml",
  ".github/workflows/release.yml",
  ".github/workflows/test.yml",
  ".husky/commit-msg",
  ".husky/post-commit",
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
      => [32m'.github/workflows/commitlint.yml'[39m was updated
      => [32m'.github/workflows/npm-audit-fix.yml'[39m was updated
      => [32m'.github/workflows/release.yml'[39m was updated
      => [32m'.github/workflows/test.yml'[39m was updated
      => [32m'.husky/commit-msg'[39m was updated
      => [32m'.husky/post-commit'[39m was updated
      => [32m'.husky/pre-commit'[39m was updated
      "
    `);
    expect(stderr).toEqual("");
  }));
