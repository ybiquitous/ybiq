const path = require("path");
const os = require("os");
const fs = require("fs");
const pkg = require("../package.json");
const { init } = require("../lib/init");
const exec = require("./helpers/exec");

const readFile = (file) => fs.promises.readFile(file, "utf8");
const readJSON = (file) => fs.promises.readFile(file, "utf8").then(JSON.parse);

const sandbox = async (callback) => {
  const workDir = path.join(os.tmpdir(), `${pkg.name}${process.hrtime.bigint()}`);
  await fs.promises.mkdir(workDir);

  const logMsgs = [];
  const logger = (msg) => logMsgs.push(msg);

  try {
    const cwd = process.cwd();
    const fixturePath = (name) => path.join(cwd, "test", "fixtures", name);
    const fixture = async (name) => {
      const src = fixturePath(name);
      const dest = path.join(workDir, "package.json");
      await fs.promises.copyFile(src, dest);
      return dest;
    };

    return await callback({
      fixture,
      readWorkFile: (name) => readFile(path.join(workDir, name)),
      logMessage: () => logMsgs.join(""),
      initArgs: { cwd: workDir, logger },
    });
  } finally {
    await fs.promises.rmdir(workDir, { recursive: true });
  }
};

test('update "package.json"', () =>
  sandbox(async (ctx) => {
    const src = await ctx.fixture("package-normal.json");
    await init(ctx.initArgs);
    expect(await readJSON(src)).toMatchSnapshot();
  }));

test('update "package.json" without fields', () =>
  sandbox(async (ctx) => {
    const src = await ctx.fixture("package-empty.json");
    await init(ctx.initArgs);
    expect(await readJSON(src)).toMatchSnapshot();
  }));

[
  ".editorconfig",
  ".remarkignore",
  ".github/workflows/commitlint.yml",
  ".github/workflows/npm-audit-fix.yml",
  ".github/workflows/release.yml",
  ".github/workflows/test.yml",
].forEach((file) => {
  test(`write "${file}"`, () =>
    sandbox(async (ctx) => {
      await ctx.fixture("package-normal.json");
      await init(ctx.initArgs);
      expect(ctx.logMessage()).toMatch(/`package.json` was updated/u);
      expect(await ctx.readWorkFile(file)).toMatchSnapshot();
    }));

  test(`contain "${file}" in package.json`, () => {
    expect(pkg.files).toContain(file);
  });
});

test("throw error if no package.json", () =>
  sandbox(async (ctx) => {
    await expect(init(ctx.initArgs)).rejects.toHaveProperty("code", "ENOENT");
  }));

test("End-to-End via CLI", () =>
  sandbox(async (ctx) => {
    await ctx.fixture("package-normal.json");
    const { stdout, stderr } = await exec(path.resolve("bin/cli.js"), "init", {
      cwd: ctx.initArgs.cwd,
    });
    expect(stdout).toMatchInlineSnapshot(`
      "=> \`package.json\` was updated
      => \`.editorconfig\` was updated
      => \`.remarkignore\` was updated
      => \`.github/workflows/commitlint.yml\` was updated
      => \`.github/workflows/npm-audit-fix.yml\` was updated
      => \`.github/workflows/release.yml\` was updated
      => \`.github/workflows/test.yml\` was updated
      "
    `);
    expect(stderr).toEqual("");
  }));
