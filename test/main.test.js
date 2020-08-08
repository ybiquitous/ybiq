const main = require("..");

test("init", () => {
  const { init } = main;
  expect(typeof init).toEqual("function");
  expect(init.name).toEqual("init");
});
