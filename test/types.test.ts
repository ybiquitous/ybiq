/* eslint-disable @typescript-eslint/no-floating-promises */
import { init, run } from "../lib/index.js"; // eslint-disable-line n/no-missing-import

const noop = (arg?: unknown): void => {
  process.stdout.write(String(arg));
};

// init
init().then(() => noop());
init({ cwd: "lib" }).then(() => noop());
init({ logger: (msg: string) => noop(msg) }).then(() => noop());
init({ cwd: "lib", logger: (msg: string) => noop(msg) }).then(() => noop);

// run
run({ scripts: ["echo hello"] }).then(() => noop());
run({
  scripts: ["fo"],
  npm: true,
  labeler: (script: string) => `Running: ${script}`,
  stdout: process.stdout,
  stderr: process.stderr,
}).then(() => noop());
