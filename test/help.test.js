const exec = require("./helpers/exec");

[[], ["unknown"], ["unknown", "xyz"]].forEach((args) => {
  test(`with arguments [${args.join(", ")}]`, async () => {
    await expect(exec(...args)).rejects.toThrowErrorMatchingSnapshot();
    await expect(exec(...args)).rejects.toHaveProperty("code", 1);
    await expect(exec(...args)).rejects.toHaveProperty("stdout", "");
    await expect(exec(...args)).rejects.toMatchSnapshot("stderr");
  });
});

["--help", "-h"].forEach((option) => {
  test(`with "${option}" option`, async () => {
    const { stdout, stderr } = await exec(option);
    expect(stdout).toMatchSnapshot();
    expect(stderr).toEqual("");
  });
});
