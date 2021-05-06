const pkg = require("../package.json");
const exec = require("./helpers/exec");

["--version", "-v"].forEach((option) => {
  test(`with "${option}" option`, async () => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    expect(stdout).toEqual(`${pkg.version}\n`);
    expect(stderr).toEqual("");
  });
});
