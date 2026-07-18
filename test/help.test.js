import { test } from "node:test";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

[[], ["unknown"], ["unknown", "xyz"]].forEach((args) => {
  test(`with arguments [${args.join(", ")}]`, async (t) => {
    const error = await exec(pkg.bin, ...args).then(
      () => null,
      (e) => e,
    );
    t.assert.ok(error, "should reject");
    t.assert.strictEqual(error.code, 1);
    t.assert.strictEqual(error.stdout, "");
    t.assert.snapshot(error.message);
    t.assert.snapshot(error.stderr);
  });
});

["--help", "-h"].forEach((option) => {
  test(`with "${option}" option`, async (t) => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    t.assert.snapshot(stdout);
    t.assert.strictEqual(stderr, "");
  });
});
