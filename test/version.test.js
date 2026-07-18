import { test } from "node:test";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

["--version", "-v"].forEach((option) => {
  test(`with "${option}" option`, async (t) => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    t.assert.strictEqual(stdout, `${pkg.version}\n`);
    t.assert.strictEqual(stderr, "");
  });
});
