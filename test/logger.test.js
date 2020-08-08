const { defaultLogger } = require("../lib/logger");

test("defaultLogger", () => {
  const spy = jest.spyOn(process.stdout, "write");
  defaultLogger("hi");
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
