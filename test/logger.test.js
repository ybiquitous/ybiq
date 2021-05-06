// eslint-disable-next-line import/no-extraneous-dependencies, node/no-extraneous-import
import { jest } from "@jest/globals";
import { defaultLogger } from "../lib/logger.js"; // eslint-disable-line sort-imports

test("defaultLogger", () => {
  const spy = jest.spyOn(process.stdout, "write");
  defaultLogger("test message");
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
