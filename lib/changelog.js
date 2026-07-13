import { promises as fsPromises } from "node:fs";
import { join } from "node:path";
import { ConventionalChangelog } from "conventional-changelog";
import { format, resolveConfig } from "prettier";

/** @import { ChangelogCommand, GenerateChangelog } from "../types/ybiq.d.ts" */

const { readFile, writeFile } = fsPromises;

const CHANGELOG_FILE = "CHANGELOG.md";
const HEADER = "# Changelog";
const LINT_DISABLE = "<!-- lint disable no-duplicate-headings -->";

/**
 * Move the changelog header block to the very top of the content.
 *
 * `conventional-changelog` prepends each new release above the existing file,
 * which buries the `# Changelog` title and the lint-disable comment. This
 * restores them to the top and drops the now-duplicated buried lines.
 *
 * @param {string} content
 * @returns {string}
 */
export function normalizeChangelog(content) {
  const body = content
    .split("\n")
    .filter((line) => {
      const trimmed = line.trim();
      return trimmed !== HEADER && trimmed !== LINT_DISABLE;
    })
    .join("\n")
    .replace(/^\n+/, "");
  return `${HEADER}\n\n${LINT_DISABLE}\n\n${body}`;
}

/** @type {GenerateChangelog} */
async function generateChangelog(cwd) {
  const file = join(cwd, CHANGELOG_FILE);
  const previous = await readFile(file, "utf8").catch((err) => {
    if (err.code === "ENOENT") return "";
    throw err;
  });

  // Generate only the latest release when a changelog already exists, or the
  // full history for the first release, mirroring `conventional-changelog`'s
  // in-place behavior of prepending new releases above the existing content.
  const generator = new ConventionalChangelog(cwd)
    .readPackage()
    .loadPreset("conventionalcommits")
    .options({ releaseCount: previous ? 1 : 0 });

  let released = "";
  for await (const chunk of generator.write()) {
    released += chunk;
  }

  await writeFile(file, released + previous);
}

/** @type {ChangelogCommand} */
export async function changelog({ cwd = process.cwd(), generate = generateChangelog } = {}) {
  await generate(cwd);

  const file = join(cwd, CHANGELOG_FILE);
  const normalized = normalizeChangelog(await readFile(file, "utf8"));
  const options = await resolveConfig(file, { editorconfig: true });
  const formatted = await format(normalized, { ...options, filepath: file });
  await writeFile(file, formatted);
}

export const command = "changelog";

export const describe = `Generate ${CHANGELOG_FILE} from conventional commits`;

export const handler = async () => {
  await changelog();
};
