import { init, run } from "../lib/index.js";

test("init", () => {
  expect(typeof init).toEqual("function");
  expect(init.name).toEqual("init");
});

test("run", () => {
  expect(typeof run).toEqual("function");
  expect(run.name).toEqual("run");
});
