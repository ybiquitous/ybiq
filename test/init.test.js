import test from "node:test";
import assert from "node:assert/strict";

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
    // expect(readJSON(src)).toMatchSnapshot();
    assert.equal(readJSON(src), "");
  }));

test('update "package.json" without fields', () =>
  sandbox(async (ctx) => {
    const src = ctx.fixture("package-empty.json");
    await init(ctx.initArgs);
    assert.equal(readJSON(src), "");
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
  ".husky/post-commit",
  ".husky/pre-commit",
].forEach((file) => {
  test(`write "${file}"`, () =>
    sandbox(async (ctx) => {
      ctx.fixture("package-normal.json");
      await init(ctx.initArgs);
      assert.ok(ctx.logMessage().includes("[32m'package.json'[39m was updated"));
      assert.match(ctx.readWorkFile(file), "");
    }));

  test(`contain "${file}" in package.json`, () => {
    assert.ok(pkg.files.includes(file));
  });
});

test("throw error if no package.json", () =>
  sandbox(async (ctx) => {
    await assert.rejects(
      () => init(ctx.initArgs),
      (error) => {
        assert.equal(error.code, "ENOENT");
        return true;
      },
    );
  }));

test("End-to-End via CLI", () =>
  sandbox(async (ctx) => {
    ctx.fixture("package-normal.json");
    const { stdout, stderr } = await exec(resolve(pkg.bin), "init", {
      cwd: ctx.initArgs.cwd,
    });
    assert.ok(
      stdout.includes(`
=> [32m'package.json'[39m was updated
=> [32m'.editorconfig'[39m was updated
=> [32m'.remarkignore'[39m was updated
=> [32m'.github/workflows/dependabot-auto-merge.yml'[39m was updated
=> [32m'.github/workflows/npm-audit-fix.yml'[39m was updated
=> [32m'.github/workflows/npm-diff.yml'[39m was updated
=> [32m'.github/workflows/release.yml'[39m was updated
=> [32m'.github/workflows/test.yml'[39m was updated
=> [32m'.husky/commit-msg'[39m was updated
=> [32m'.husky/post-commit'[39m was updated
=> [32m'.husky/pre-commit'[39m was updated
=> [32m'.husky/.gitignore'[39m was removed
=> [32m'.github/workflows/commitlint.yml'[39m was removed`),
      stdout,
    );
    assert.equal(stderr, "");
  }));

test("Remove `.husky/.gitignore` if exists", () =>
  sandbox(async (ctx) => {
    mkdirSync(join(ctx.workDir, ".husky"));
    writeFileSync(join(ctx.workDir, ".husky", ".gitignore"), "_");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    assert.equal(existsSync(join(ctx.workDir, ".husky", ".gitignore")), false);
  }));

test("Remove `.github/workflows/commitlint.yml` if exists", () =>
  sandbox(async (ctx) => {
    mkdirSync(join(ctx.workDir, ".github", "workflows"), { recursive: true });
    writeFileSync(join(ctx.workDir, ".github", "workflows", "commitlint.yml"), "dummy: 1");
    writeFileSync(join(ctx.workDir, "package.json"), "{}");

    await init(ctx.initArgs);

    assert.equal(existsSync(join(ctx.workDir, ".github", "workflows", "commitlint.yml")), false);
  }));
