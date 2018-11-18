const path = require("path");
const { EOL } = require("os");
const fs = require("fs-extra");
const originalPackage = require("../package.json");

const packagePath = (...pathElements) =>
  path.join(...[__dirname, "..", ...pathElements]);

const template = name => path.join(__dirname, "..", "templates", name);

class Init {
  constructor(baseDir, logger) {
    this.baseDir = baseDir;
    this.logger = logger;
  }

  async copyFile(src, dest) {
    await fs.copy(src, dest);
    this.logger(`${dest} was updated.`);
  }

  currentPath(...pathElements) {
    return path.join(...[this.baseDir, ...pathElements]);
  }

  async writeFile(fileName, fileContent) {
    const file = this.currentPath(fileName);
    await fs.writeFile(file, `${fileContent}\n`);
    this.logger(`${file} was updated.`);
  }

  readFile(fileName) {
    return fs.readFile(this.currentPath(fileName), "utf8");
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

    await this.writeFile("package.json", JSON.stringify(packageInfo, null, 2));
  }

  async writeTemplateFile(name) {
    await this.copyFile(template(name), this.currentPath(name));
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
  await cmd.writeTemplateFile(".eslintrc.js");
};

module.exports.desc = `Setup npm project:
- Update 'package.json'
- Create '.editorconfig'
- Create '.eslintrc.js'`;
