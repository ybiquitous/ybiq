import { promises as fsPromises, existsSync } from "fs";
import { join, relative, resolve } from "path";
import { inspect } from "util";
import { defaultLogger } from "./logger.js";

const { copyFile, mkdir, readFile, writeFile, unlink } = fsPromises;

/**
 * @param {unknown} value
 */
const emphasize = (value) => inspect(value, { colors: true });

const PACKAGE_DIR = new URL("..", import.meta.url).pathname;

/**
 * @param {string} elem
 * @param {...string} elems
 */
const packagePath = (elem, ...elems) => join(PACKAGE_DIR, elem, ...elems);

/**
 * @param {string} baseDir
 * @param {import("../types/ybiq").Logger} logger
 */
// eslint-disable-next-line max-lines-per-function
const initCommand = (baseDir, logger) => {
  /**
   * @param {string} elem
   * @param {...string} elems
   */
  const currentPath = (elem, ...elems) => join(baseDir, elem, ...elems);

  /**
   * @param {string} fileName
   */
  const read = (fileName) => readFile(currentPath(fileName), "utf8");

  /**
   * @param {string} src
   * @param {string} dest
   */
  const copy = async (src, dest) => {
    await mkdir(resolve(dest, ".."), { recursive: true });
    await copyFile(src, dest);
    logger(`=> ${emphasize(relative(baseDir, dest))} was updated`);
  };

  /**
   * @param {string} fileName
   * @param {string} fileContent
   */
  const write = async (fileName, fileContent) => {
    const file = currentPath(fileName);
    await writeFile(file, `${fileContent}\n`);
    logger(`=> ${emphasize(relative(baseDir, file))} was updated`);
  };

  return {
    // eslint-disable-next-line max-statements, max-lines-per-function
    async updatePackageFile() {
      const packageInfo = JSON.parse(await read("package.json"));

      // update 'scripts'
      if (!("scripts" in packageInfo)) {
        packageInfo.scripts = {};
      }
      const { scripts } = packageInfo;
      if (!("test" in scripts)) {
        scripts.test = "test";
      }
      scripts["test:watch"] = `${scripts.test} --watch`;
      scripts["test:coverage"] = `${scripts.test} --coverage`;

      const originalPackage = JSON.parse(
        // @ts-expect-error
        await readFile(new URL("../package.json", import.meta.url))
      );

      for (const [key, script] of Object.entries(originalPackage.scripts)) {
        if (!(key === "test" || key.startsWith("test:"))) {
          scripts[key] = script;
        }
      }

      /**
       * @param {"lint-staged" | "standard-version" | "remarkConfig"} key
       */
      const updateOtherKey = (key) => {
        if (!(key in packageInfo)) {
          packageInfo[key] = {};
        }
        Object.assign(packageInfo[key], originalPackage[key]);
      };
      updateOtherKey("lint-staged");
      updateOtherKey("standard-version");
      updateOtherKey("remarkConfig");

      // eslint-disable-next-line require-atomic-updates
      packageInfo.commitlint = {
        extends: ["@commitlint/config-conventional"],
        rules: {
          "body-max-line-length": [1, "always", 100],
        },
      };

      // eslint-disable-next-line require-atomic-updates
      packageInfo.eslintConfig = {
        root: true,
        extends: ["ybiquitous"],
        ignorePatterns: ["coverage", "dist", "tmp"],
        reportUnusedDisableDirectives: true,
      };

      // Delete husky v4 configuration.
      delete packageInfo.husky;

      await write("package.json", JSON.stringify(packageInfo, null, 2));
    },

    /**
     * @param {string} name
     * @param {...string} names
     */
    async writePackageFile(name, ...names) {
      await copy(packagePath(name, ...names), currentPath(name, ...names));
    },

    // NOTE: husky v7 no longer requires `.husky/.gitignore`.
    //       See https://github.com/typicode/husky/releases/tag/v7.0.0
    //
    // TODO: `fsPromises.rm()` is available since Node 14.14.0.
    //       See https://nodejs.org/api/fs.html#fs_fspromises_rm_path_options
    async removeNeedlessHuskyIgnore() {
      const huskyGitignore = currentPath(".husky", ".gitignore");
      if (existsSync(huskyGitignore)) {
        await unlink(huskyGitignore);
      }
    },
  };
};

/** @type {import("../types/ybiq").InitCommand} */
// eslint-disable-next-line max-statements
export async function init({ cwd = process.cwd(), logger = defaultLogger } = {}) {
  const cmd = initCommand(cwd, logger);

  await cmd.updatePackageFile();
  await cmd.writePackageFile(".editorconfig");
  await cmd.writePackageFile(".remarkignore");
  await cmd.writePackageFile(".github", "workflows", "commitlint.yml");
  await cmd.writePackageFile(".github", "workflows", "npm-audit-fix.yml");
  await cmd.writePackageFile(".github", "workflows", "release.yml");
  await cmd.writePackageFile(".github", "workflows", "test.yml");
  await cmd.writePackageFile(".husky", "commit-msg");
  await cmd.writePackageFile(".husky", "post-commit");
  await cmd.writePackageFile(".husky", "pre-commit");

  await cmd.removeNeedlessHuskyIgnore();
}

export const command = "init";

export const describe = "Setup npm project, e.g. update 'package.json'";

export const handler = async () => {
  await init();
};
