import test from "node:test";
import assert from "node:assert/strict";

import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

test("without any arguments", async () => {
  await assert.rejects(
    () => exec(pkg.bin),
    (error) => {
      assert.equal(error.code, 1);
      assert.equal(error.stdout, "");
      assert.match(error.stderr, /Not enough non-option arguments: got 0, need at least 1/);
      return true;
    },
  );
});

test("with an unknown argument", async () => {
  await assert.rejects(
    () => exec(pkg.bin, "unknown"),
    (error) => {
      assert.equal(error.code, 1);
      assert.equal(error.stdout, "");
      assert.match(error.stderr, /Unknown argument: unknown/);
      return true;
    },
  );
});

test("with unknown arguments", async () => {
  await assert.rejects(
    () => exec(pkg.bin, "unknown", "xyz"),
    (error) => {
      assert.equal(error.code, 1);
      assert.equal(error.stdout, "");
      assert.match(error.stderr, /Unknown arguments: unknown, xyz/);
      return true;
    },
  );
});

for (const option of ["--help", "-h"]) {
  test(`with "${option}" option`, async () => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    assert.equal(
      stdout,
      `cli.js <command>

Commands:
  cli.js init  Setup npm project, e.g. update 'package.json'

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
`,
    );
    assert.equal(stderr, "");
  });
}
