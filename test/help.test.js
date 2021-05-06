import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

[[], ["unknown"], ["unknown", "xyz"]].forEach((args) => {
  test(`with arguments [${args.join(", ")}]`, async () => {
    await expect(exec(pkg.bin, ...args)).rejects.toThrowErrorMatchingSnapshot();
    await expect(exec(pkg.bin, ...args)).rejects.toHaveProperty("code", 1);
    await expect(exec(pkg.bin, ...args)).rejects.toHaveProperty("stdout", "");
    await expect(exec(pkg.bin, ...args)).rejects.toMatchSnapshot("stderr");
  });
});

["--help", "-h"].forEach((option) => {
  test(`with "${option}" option`, async () => {
    const { stdout, stderr } = await exec(pkg.bin, option);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });
});
