import { readFileSync } from "node:fs";
import { run } from "../lib/run.js";

// TODO: Switch to use "import with" syntax once ESLint supports it.
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf-8"));

const [, , commandPattern] = process.argv;
if (!commandPattern) {
  throw new Error(`Command pattern is required.`);
}

const pattern = new RegExp(`^${commandPattern}$`, "u");

const commands = Object.keys(pkg.scripts)
  .filter((name) => pattern.test(name))
  .map((name) => `npm run ${name}`);

run({ scripts: commands, labeler: (s) => s.replace("npm run ", "") }).then(({ success }) => {
  if (!success) {
    process.exit(1);
  }
});
