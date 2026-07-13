import { changelog, init, run } from "../lib/index.js";

test("init", () => {
  expect(typeof init).toEqual("function");
  expect(init.name).toEqual("init");
});

test("run", () => {
  expect(typeof run).toEqual("function");
  expect(run.name).toEqual("run");
});

test("changelog", () => {
  expect(typeof changelog).toEqual("function");
  expect(changelog.name).toEqual("changelog");
});
