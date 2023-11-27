import test from "node:test";
import assert from "node:assert/strict";

import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

for (const option of ["--version", "-v"]) {
  test(`with "${option}" option`, async () => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    assert.equal(stdout, `${pkg.version}\n`);
    assert.equal(stderr, "");
  });
}
