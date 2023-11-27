import test from "node:test";
import assert from "node:assert/strict";

import { defaultLogger } from "../lib/logger.js";

test("defaultLogger", (t) => {
  t.mock.method(process.stdout, "write", () => {});
  defaultLogger("test message");
  assert.equal(process.stdout.write.mock.calls.length, 1);
  t.mock.restoreAll();
});
