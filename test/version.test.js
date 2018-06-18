const test = require("tape");
const pkg = require("../package.json");
const exec = require("./helpers/exec");

test("version", t => {
  ["--version", "-v"].forEach(option => {
    t.test(`with "${option}" option`, async t => {
      const { stdout, stderr } = await exec(option);
      t.is(stdout.trim(), pkg.version);
      t.is(stderr, "");
      t.end();
    });
  });
});
