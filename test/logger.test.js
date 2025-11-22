import { jest } from "@jest/globals"; // eslint-disable-line n/no-extraneous-import
import { defaultLogger } from "../lib/logger.js";

test("defaultLogger", () => {
  const spy = jest.spyOn(process.stdout, "write");
  defaultLogger("test message");
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
