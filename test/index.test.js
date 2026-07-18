import { test } from "node:test";
import { init, run } from "../lib/index.js";

test("init", (t) => {
  t.assert.strictEqual(typeof init, "function");
  t.assert.strictEqual(init.name, "init");
});

test("run", (t) => {
  t.assert.strictEqual(typeof run, "function");
  t.assert.strictEqual(run.name, "run");
});
