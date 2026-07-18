import { test } from "node:test";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

[[], ["unknown"], ["unknown", "xyz"]].forEach((args) => {
  test(`with arguments [${args.join(", ")}]`, async (t) => {
    await t.assert.rejects(
      () => exec(pkg.bin, ...args),
      (error) => {
        t.assert.strictEqual(error.code, 1);
        t.assert.strictEqual(error.stdout, "");
        t.assert.snapshot(error.message);
        t.assert.snapshot(error.stderr);
        return true;
      },
    );
  });
});

["--help", "-h"].forEach((option) => {
  test(`with "${option}" option`, async (t) => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    t.assert.snapshot(stdout);
    t.assert.strictEqual(stderr, "");
  });
});
