import test from "node:test";
import assert from "node:assert/strict";

import { init } from "../lib/index.js";

test("init", () => {
  assert.equal(typeof init, "function");
  assert.equal(init.name, "init");
});
