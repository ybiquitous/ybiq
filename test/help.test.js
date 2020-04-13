const test = require("tape");
const exec = require("./helpers/exec");

const HELP = `
cli.js <command>

Commands:
  cli.js init  Setup npm project:
               - Update 'package.json'
               - Create '.editorconfig'

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
`.trim();

test("help", (t) => {
  [[], ["unknown"], ["unknown", "xyz"]].forEach((args) => {
    t.test(`with arguments [${args.join(", ")}]`, async (t) => {
      const error = await exec(...args).catch((err) => err);
      const { code, stdout, stderr } = error;
      t.ok(error instanceof Error);
      t.is(code, 1);
      t.is(stdout, "");
      t.ok(stderr.includes(HELP));
      t.end();
    });
  });
  ["--help", "-h"].forEach((option) => {
    t.test(`with "${option}" option`, async (t) => {
      const { stdout, stderr } = await exec(option);
      t.ok(stdout.includes(HELP));
      t.is(stderr, "");
      t.end();
    });
  });
});
