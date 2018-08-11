const path = require("path");
const os = require("os");
const fs = require("fs-extra");
const test = require("tape");
const pkg = require("../package.json");
const init = require("../lib/init");
const exec = require("./helpers/exec");

const readFile = file => fs.readFile(file, "utf8");
const readJSON = file => fs.readJSON(file, "utf8");

const sandbox = async (fn, t) => {
  const workDir = path.join(os.tmpdir(), `${pkg.name}${Date.now()}`);
  await fs.mkdirs(workDir);

  const logMsgs = [];
  const logger = msg => logMsgs.push(msg);

  try {
    const cwd = process.cwd();
    const fixturePath = name => path.join(cwd, "test", "fixtures", name);
    const fixture = async name => {
      const src = fixturePath(name);
      const dest = path.join(workDir, "package.json");
      await fs.copy(src, dest);
      return dest;
    };

    return await fn(t, {
      fixturePath,
      fixture,
      readFixture: name => readFile(fixturePath(name)),
      readFixtureJSON: name => readJSON(fixturePath(name)),
      readOrigFile: name => readFile(path.join(cwd, name)),
      readWorkFile: name => readFile(path.join(workDir, name)),
      logMessage: () => logMsgs.join(""),
      initArgs: { cwd: workDir, logger },
    });
  } finally {
    await fs.remove(workDir);
  }
};

test("init", t => {
  const testInSandbox = (name, fn) => {
    t.test(name, t => sandbox(fn, t));
  };

  testInSandbox('update "package.json"', async (t, ctx) => {
    const src = await ctx.fixture("package-normal.json");
    await init(ctx.initArgs);
    const actual = await readJSON(src);
    const expected = await ctx.readFixtureJSON("package-normal_expected.json");
    t.deepEqual(actual, expected);
    t.end();
  });

  testInSandbox('update "package.json" without fields', async (t, ctx) => {
    const src = await ctx.fixture("package-empty.json");
    await init(ctx.initArgs);
    const actual = await readJSON(src);
    const expected = await ctx.readFixtureJSON("package-empty_expected.json");
    t.deepEqual(actual, expected);
    t.end();
  });

  [".editorconfig", ".prettierignore", ".markdownlint.json"].forEach(file => {
    testInSandbox(`write "${file}"`, async (t, ctx) => {
      await ctx.fixture("package-normal.json");
      await init(ctx.initArgs);
      t.ok(ctx.logMessage().includes("package.json was updated."));

      const original = await ctx.readOrigFile(file);
      const copy = await ctx.readWorkFile(file);
      t.is(original, copy);

      t.ok(pkg.files.includes(file));
      t.end();
    });
  });

  testInSandbox('write ".eslintrc.js"', async (t, ctx) => {
    await ctx.fixture("package-normal.json");
    await init(ctx.initArgs);
    t.ok(ctx.logMessage().includes(".eslintrc.js was updated."));

    const actual = await ctx.readWorkFile(".eslintrc.js");
    const expected = await ctx.readFixture(".eslintrc_expected.js");
    t.is(actual, expected);
    t.end();
  });

  testInSandbox('write ".commitlintrc.js"', async (t, ctx) => {
    await ctx.fixture("package-normal.json");
    await init(ctx.initArgs);
    t.ok(ctx.logMessage().includes(".commitlintrc.js was updated."));

    const actual = await ctx.readWorkFile(".commitlintrc.js");
    const expected = await ctx.readFixture(".commitlintrc_expected.js");
    t.is(actual, expected);
    t.end();
  });

  testInSandbox("throw error if no package.json", async (t, ctx) => {
    const error = await init(ctx.initArgs).catch(err => err);
    t.ok(error instanceof Error);
    t.is(error.code, "ENOENT");
    t.end();
  });

  testInSandbox("End-to-End via CLI", async (t, ctx) => {
    await ctx.fixture("package-normal.json");
    const { stdout, stderr } = await exec("init", { cwd: ctx.initArgs.cwd });
    t.ok(stdout.includes("package.json was updated."));
    t.is(stderr, "");
    t.end();
  });
});
