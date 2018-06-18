const test = require("tape");
const main = require("..");

test("main", t => {
  t.test("init", t => {
    const { init } = main;
    t.is(typeof init, "function");
    t.is(init.name, "init");
    t.end();
  });
});
