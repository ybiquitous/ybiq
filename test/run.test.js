import { resolve } from "node:path";

import { expect, jest } from "@jest/globals"; // eslint-disable-line import/no-extraneous-dependencies

import { run } from "../lib/run.js";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

let stdoutMock;
let stderrMock;

beforeEach(() => {
  stdoutMock = { write: jest.fn(), hasColors: () => false };
  stderrMock = { write: jest.fn(), hasColors: () => false };
});

afterEach(() => {
  jest.clearAllMocks();
});

function runWithMocks(scripts, options = {}) {
  return run({
    scripts,
    stdout: stdoutMock,
    stderr: stderrMock,
    ...options,
  });
}

// eslint-disable-next-line max-statements
test("run multiple scripts in parallel", async () => {
  const scripts = [
    `echo "Hello"`,
    `node -e "console.log('Hi')"`,
    `node -e "console.error('Error')"`,
  ];
  const result = await runWithMocks(scripts);

  expect(result.success).toBe(true);
  expect(result.results).toHaveLength(3);
  expect(result.results[0]).toEqual({
    code: 0,
    success: true,
    script: scripts[0],
    error: undefined,
  });
  expect(result.results[1]).toEqual({
    code: 0,
    success: true,
    script: scripts[1],
    error: undefined,
  });
  expect(result.results[2]).toEqual({
    code: 0,
    success: true,
    script: scripts[2],
    error: undefined,
  });

  expect(stdoutMock.write).toHaveBeenCalledTimes(2);
  expect(stdoutMock.write).toHaveBeenNthCalledWith(1, `[echo "Hello"] Hello\n`);
  expect(stdoutMock.write).toHaveBeenNthCalledWith(2, `[node -e "console.log('Hi')"] Hi\n`);
  expect(stderrMock.write).toHaveBeenCalledTimes(1);
  expect(stderrMock.write).toHaveBeenNthCalledWith(1, `[node -e "console.error('Error')"] Error\n`);
});

// eslint-disable-next-line max-statements
test("finish with errors when some scripts fail", async () => {
  const scripts = [`node -e "console.log('Hi')"`, `node -e "process.exit(1)"`, `invalid_command`];
  const result = await runWithMocks(scripts);

  expect(result.success).toBe(false);
  expect(result.results).toHaveLength(3);
  expect(result.results[0]).toEqual({
    code: 0,
    success: true,
    script: scripts[0],
    error: undefined,
  });
  expect(result.results[1]).toEqual({
    code: 1,
    success: false,
    script: scripts[1],
    error: undefined,
  });
  expect(result.results[2]).toEqual({
    code: 127,
    success: false,
    script: scripts[2],
    error: undefined,
  });
  expect(stdoutMock.write).toHaveBeenCalledTimes(1);
  expect(stdoutMock.write).toHaveBeenNthCalledWith(1, `[node -e "console.log('Hi')"] Hi\n`);
  expect(stderrMock.write).toHaveBeenCalledTimes(1);
  expect(stderrMock.write).toHaveBeenNthCalledWith(
    1,
    expect.stringMatching(/\[invalid_command\] \/bin\/sh: .+ not found/u),
  );
});

test("run npm scripts", async () => {
  const scripts = ["postprepare"];
  const result = await runWithMocks(scripts, { npm: true });

  expect(result.success).toBe(true);
  expect(result.results).toHaveLength(1);
  expect(result.results[0]).toEqual({
    code: 0,
    success: true,
    script: "npm run postprepare",
    error: undefined,
  });
});

test("End-to-End via CLI", async () => {
  const { stdout, stderr } = await exec(resolve(pkg.bin), "run", `echo "Hi"`);

  expect(stdout).toBe(`[echo "Hi"] Hi\n`);
  expect(stderr).toBe("");
});
