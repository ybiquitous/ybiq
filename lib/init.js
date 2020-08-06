const path = require("path");
const { promisify } = require("util");
const fs = require("fs");
const originalPackage = require("../package.json");
const { defaultLogger } = require("./logger");

const copy = promisify(fs.copyFile);
const write = promisify(fs.writeFile);
const read = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

/**
 * @param {string} elem
 * @param {...string} elems
 */
const packagePath = (elem, ...elems) => path.join(...[__dirname, "..", elem, ...elems]);

/**
 * @param {string} baseDir
 * @param {import("ybiq").Logger} logger
 */
// eslint-disable-next-line max-lines-per-function
const initCommand = (baseDir, logger) => {
  /**
   * @param {string} elem
   * @param {...string} elems
   */
  const currentPath = (elem, ...elems) => path.join(...[baseDir, elem, ...elems]);

  /**
   * @param {string} fileName
   */
  const readFile = (fileName) => read(currentPath(fileName), "utf8");

  /**
   * @param {string} src
   * @param {string} dest
   */
  const copyFile = async (src, dest) => {
    await mkdir(path.resolve(dest, ".."), { recursive: true });
    await copy(src, dest);
    logger(`=> \`${path.relative(baseDir, dest)}\` was updated`);
  };

  /**
   * @param {string} fileName
   * @param {string} fileContent
   */
  const writeFile = async (fileName, fileContent) => {
    const file = currentPath(fileName);
    await write(file, `${fileContent}\n`);
    logger(`=> \`${path.relative(baseDir, file)}\` was updated`);
  };

  return {
    // eslint-disable-next-line max-statements
    async updatePackageFile() {
      const packageInfo = JSON.parse(await readFile("package.json"));

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
        .filter((key) => !(key === "test" || key.startsWith("test:")))
        .forEach((key) => {
          // @ts-ignore
          scripts[key] = originalPackage.scripts[key];
        });

      /**
       * @param {"husky" | "lint-staged" | "standard-version" | "remarkConfig"} key
       */
      const updateOtherKey = (key) => {
        if (!(key in packageInfo)) {
          packageInfo[key] = {};
        }
        Object.assign(packageInfo[key], originalPackage[key]);
      };
      updateOtherKey("husky");
      updateOtherKey("lint-staged");
      updateOtherKey("standard-version");
      updateOtherKey("remarkConfig");

      packageInfo.commitlint = {
        extends: ["@commitlint/config-conventional"],
        rules: {
          "body-max-line-length": [1, "always", 100],
        },
      };

      packageInfo.eslintConfig = {
        root: true,
        extends: ["ybiquitous"],
      };

      await writeFile("package.json", JSON.stringify(packageInfo, null, 2));
    },

    /**
     * @param {string} name
     * @param {...string} names
     */
    async writePackageFile(name, ...names) {
      await copyFile(packagePath(name, ...names), currentPath(name, ...names));
    },
  };
};

/**
 * @param {import("ybiq").CommandParams} params
 */
async function init({ cwd = process.cwd(), logger = defaultLogger } = {}) {
  const cmd = initCommand(cwd, logger);

  await cmd.updatePackageFile();
  await cmd.writePackageFile(".editorconfig");
  await cmd.writePackageFile(".remarkignore");
  await cmd.writePackageFile(".github", "workflows", "commitlint.yml");
  await cmd.writePackageFile(".github", "workflows", "npm-audit-fix.yml");
  await cmd.writePackageFile(".github", "workflows", "release.yml");
  await cmd.writePackageFile(".github", "workflows", "test.yml");
}
module.exports.init = init;

module.exports.command = "init";

module.exports.describe = `Setup npm project:
- Update \`package.json\`
- Create \`.editorconfig\`
- Create \`.remarkignore\`
- Create \`.github/workflows/*.yml\``;

module.exports.handler = async () => {
  await init();
};
