import { resolve } from "node:path";
import { beforeEach, mock, test } from "node:test";

import { run } from "../lib/run.js";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

let stdoutMock;
let stderrMock;

beforeEach(() => {
  stdoutMock = { write: mock.fn(), hasColors: () => false };
  stderrMock = { write: mock.fn(), hasColors: () => false };
});

function runWithMocks(scripts, options = {}) {
  return run({
    scripts,
    stdout: stdoutMock,
    stderr: stderrMock,
    ...options,
  });
}

test("run multiple scripts in parallel", async (t) => {
  const scripts = [
    `echo "Hello"`,
    `node -e "console.log('Hi')"`,
    `node -e "console.error('Error')"`,
  ];
  const result = await runWithMocks(scripts);

  t.assert.strictEqual(result.success, true);
  t.assert.strictEqual(result.results.length, 3);
  t.assert.deepStrictEqual(result.results[0], {
    code: 0,
    success: true,
    script: scripts[0],
    error: undefined,
  });
  t.assert.deepStrictEqual(result.results[1], {
    code: 0,
    success: true,
    script: scripts[1],
    error: undefined,
  });
  t.assert.deepStrictEqual(result.results[2], {
    code: 0,
    success: true,
    script: scripts[2],
    error: undefined,
  });

  t.assert.strictEqual(stdoutMock.write.mock.callCount(), 2);
  t.assert.deepStrictEqual(stdoutMock.write.mock.calls[0].arguments, [`[echo "Hello"] Hello\n`]);
  t.assert.deepStrictEqual(stdoutMock.write.mock.calls[1].arguments, [
    `[node -e "console.log('Hi')"] Hi\n`,
  ]);
  t.assert.strictEqual(stderrMock.write.mock.callCount(), 1);
  t.assert.deepStrictEqual(stderrMock.write.mock.calls[0].arguments, [
    `[node -e "console.error('Error')"] Error\n`,
  ]);
});

test("finish with errors when some scripts fail", async (t) => {
  const scripts = [`node -e "console.log('Hi')"`, `node -e "process.exit(1)"`, `invalid_command`];
  const result = await runWithMocks(scripts);

  t.assert.strictEqual(result.success, false);
  t.assert.strictEqual(result.results.length, 3);
  t.assert.deepStrictEqual(result.results[0], {
    code: 0,
    success: true,
    script: scripts[0],
    error: undefined,
  });
  t.assert.deepStrictEqual(result.results[1], {
    code: 1,
    success: false,
    script: scripts[1],
    error: undefined,
  });
  t.assert.deepStrictEqual(result.results[2], {
    code: 127,
    success: false,
    script: scripts[2],
    error: undefined,
  });
  t.assert.strictEqual(stdoutMock.write.mock.callCount(), 1);
  t.assert.deepStrictEqual(stdoutMock.write.mock.calls[0].arguments, [
    `[node -e "console.log('Hi')"] Hi\n`,
  ]);
  t.assert.strictEqual(stderrMock.write.mock.callCount(), 1);
  t.assert.match(
    stderrMock.write.mock.calls[0].arguments[0],
    /\[invalid_command\] \/bin\/sh: .+ not found/u,
  );
});

test("return a structured error when a script cannot be spawned", async (t) => {
  const script = 'echo "Hi"';
  const result = await runWithMocks([script], { cwd: "/no/such/ybiq/dir" });

  t.assert.strictEqual(result.success, false);
  t.assert.strictEqual(result.results.length, 1);
  t.assert.strictEqual(result.results[0].script, script);
  t.assert.strictEqual(result.results[0].success, false);
  t.assert.strictEqual(result.results[0].code, undefined);
  t.assert.ok(result.results[0].error instanceof Error);
  t.assert.match(result.results[0].error.message, /ENOENT/u);
  t.assert.strictEqual(stdoutMock.write.mock.callCount(), 0);
  t.assert.strictEqual(stderrMock.write.mock.callCount(), 0);
});

test("run npm scripts", async (t) => {
  const scripts = ["postprepare"];
  const result = await runWithMocks(scripts, { npm: true });

  t.assert.strictEqual(result.success, true);
  t.assert.strictEqual(result.results.length, 1);
  t.assert.deepStrictEqual(result.results[0], {
    code: 0,
    success: true,
    script: "npm run postprepare",
    error: undefined,
  });
});

test("End-to-End via CLI", async (t) => {
  const { stdout, stderr } = await exec(resolve(pkg.bin), "run", `echo "Hi"`);

  t.assert.strictEqual(stdout, `[echo "Hi"] Hi\n`);
  t.assert.strictEqual(stderr, "");
});

test("End-to-End via CLI when some scripts fail", async (t) => {
  await t.assert.rejects(
    exec(resolve(pkg.bin), "run", `node -e "console.log('Hi')"`, `node -e "process.exit(1)"`),
    (error) => {
      t.assert.strictEqual(error.stdout, `[node -e "console.log('Hi')"] Hi\n`);
      t.assert.strictEqual(
        error.stderr,
        `
Failed:
- node -e "process.exit(1)" (exit code: 1)
`,
      );
      t.assert.strictEqual(error.code, 1);
      return true;
    },
  );
});
