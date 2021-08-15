import { init } from "../lib/index.js";

test("init", () => {
  expect(typeof init).toEqual("function");
  expect(init.name).toEqual("init");
});
