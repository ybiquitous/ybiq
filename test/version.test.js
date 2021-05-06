import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

["--version", "-v"].forEach((option) => {
  test(`with "${option}" option`, async () => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    expect(stdout).toEqual(`${pkg.version}\n`);
    expect(stderr).toEqual("");
  });
});
