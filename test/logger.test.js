// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from "@jest/globals";
import { defaultLogger } from "../lib/logger.js";

test("defaultLogger", () => {
  const spy = jest.spyOn(process.stdout, "write");
  defaultLogger("test message");
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
