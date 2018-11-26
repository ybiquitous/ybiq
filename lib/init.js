const path = require("path");
const { EOL } = require("os");
const { promisify } = require("util");
const fs = require("fs");
const originalPackage = require("../package.json");

const copyFile = promisify(fs.copyFile);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const packagePath = (...pathElements) =>
  path.join(...[__dirname, "..", ...pathElements]);

class Init {
  constructor(baseDir, logger) {
    this.baseDir = baseDir;
    this.logger = logger;
  }

  async copyFile(src, dest) {
    await copyFile(src, dest);
    this.logger(`${dest} was updated.`);
  }

  currentPath(...pathElements) {
    return path.join(...[this.baseDir, ...pathElements]);
  }

  async writeFile(fileName, fileContent) {
    const file = this.currentPath(fileName);
    await writeFile(file, `${fileContent}\n`);
    this.logger(`${file} was updated.`);
  }

  readFile(fileName) {
    return readFile(this.currentPath(fileName), "utf8");
  }

  // eslint-disable-next-line max-statements
  async updatePackageFile() {
    const packageInfo = JSON.parse(await this.readFile("package.json"));

    // update 'scripts'
    if (!("scripts" in packageInfo)) {
      packageInfo.scripts = {};
    }
    const { scripts } = packageInfo;
    if (!("test" in scripts)) {
      scripts.test = "test";
    }
    scripts["test:watch"] = `${scripts.test} --watch`;
    scripts["test:coverage"] = 'echo "unsupported." && exit 1';
    Object.keys(originalPackage.scripts)
      .filter(key => !(key === "test" || key.startsWith("test:")))
      .forEach(key => {
        scripts[key] = originalPackage.scripts[key];
      });

    // update other keys
    const keys = ["husky", "lint-staged", "standard-version"];
    keys.forEach(key => {
      if (!(key in packageInfo)) {
        packageInfo[key] = {};
      }
      Object.assign(packageInfo[key], originalPackage[key]);
    });
    packageInfo.commitlint = {
      extends: ["@commitlint/config-conventional"],
    };
    packageInfo.eslintConfig = {
      extends: ["ybiquitous"],
    };

    await this.writeFile("package.json", JSON.stringify(packageInfo, null, 2));
  }

  async writePackageFile(name) {
    await this.copyFile(packagePath(name), this.currentPath(name));
  }
}

const defaultLogger = msg => process.stdout.write(`${msg}${EOL}`);

module.exports = async function init({
  cwd = process.cwd(),
  logger = defaultLogger,
} = {}) {
  const cmd = new Init(cwd, logger);
  await cmd.updatePackageFile();
  await cmd.writePackageFile(".editorconfig");
  await cmd.writePackageFile(".markdownlint.json");
};

module.exports.desc = `Setup npm project:
- Update 'package.json'
- Create '.editorconfig'`;
