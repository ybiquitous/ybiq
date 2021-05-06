import { init } from "..";

test("init", () => {
  expect(typeof init).toEqual("function");
  expect(init.name).toEqual("init");
});
