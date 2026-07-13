import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { changelog, normalizeChangelog } from "../lib/changelog.js";
import { pkg } from "./helpers/pkg.js";

const HEADER = "# Changelog";
const COMMENT = "<!-- lint disable no-duplicate-headings -->";
const TOP = `${HEADER}\n\n${COMMENT}\n\n`;

describe("normalizeChangelog", () => {
  test("prepends the header block when absent", () => {
    expect(normalizeChangelog("## [1.0.0] (2026)\n\n- a\n")).toEqual(
      `${TOP}## [1.0.0] (2026)\n\n- a\n`,
    );
  });

  test("moves a buried header block back to the top", () => {
    const buried = ["## [2.0.0]", "", "- new", "", HEADER, "", COMMENT, "", "## [1.0.0]", ""].join(
      "\n",
    );
    const result = normalizeChangelog(buried);
    expect(result.startsWith(`${TOP}## [2.0.0]`)).toEqual(true);
    expect(result.match(/^# Changelog$/gm)).toHaveLength(1);
    expect(result.split(COMMENT)).toHaveLength(2);
  });

  test("is idempotent", () => {
    const once = normalizeChangelog("## [1.0.0]\n");
    expect(normalizeChangelog(once)).toEqual(once);
  });
});

const sandbox = async (callback) => {
  const dir = join(tmpdir(), `${pkg.name}-changelog-${process.hrtime.bigint()}`);
  mkdirSync(dir);
  try {
    return await callback(dir);
  } finally {
    rmSync(dir, { recursive: true });
  }
};

test("changelog() normalizes and formats the generated file", () =>
  sandbox(async (dir) => {
    const file = join(dir, "CHANGELOG.md");
    // Simulate conventional-changelog prepending a release above the existing header.
    const generate = async (cwd) => {
      writeFileSync(
        join(cwd, "CHANGELOG.md"),
        `## [2.0.0](https://x) (2026)\n\n### Features\n\n- new\n\n${TOP}## [1.0.0](https://x) (2025)\n\n### Bug Fixes\n\n- old\n`,
      );
    };

    await changelog({ cwd: dir, generate });

    const content = readFileSync(file, "utf8");
    expect(existsSync(file)).toEqual(true);
    expect(content.startsWith(`${TOP}## [2.0.0]`)).toEqual(true);
    expect(content.match(/^# Changelog$/gm)).toHaveLength(1);
  }));

test("changelog() propagates generator failures", () =>
  sandbox(async (dir) => {
    const generate = async () => {
      throw new Error("boom");
    };
    await expect(changelog({ cwd: dir, generate })).rejects.toThrow("boom");
  }));
