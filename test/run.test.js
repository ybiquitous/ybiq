import { resolve } from "node:path";

import { expect, jest } from "@jest/globals"; // eslint-disable-line import/no-extraneous-dependencies

import { run } from "../lib/run.js";
import { exec } from "./helpers/exec.js";
import { pkg } from "./helpers/pkg.js";

let stdoutMock;
let stderrMock;
let originalEnv;

beforeEach(() => {
  stdoutMock = { write: jest.fn() };
  stderrMock = { write: jest.fn() };
  originalEnv = { ...process.env };
  process.env.FORCE_COLOR = undefined;
  process.env.NO_COLOR = "1";
});

afterEach(() => {
  jest.clearAllMocks();
  process.env = originalEnv;
});

// eslint-disable-next-line max-statements
test("run multiple scripts in parallel", async () => {
  const scripts = [
    `echo "Hello"`,
    `node -e "console.log('Hi')"`,
    `node -e "console.error('Error')"`,
  ];
  const result = await run({ scripts, stdout: stdoutMock, stderr: stderrMock });

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
  expect(stdoutMock.write.mock.calls).toMatchSnapshot();
  expect(stderrMock.write).toHaveBeenCalledTimes(1);
  expect(stderrMock.write.mock.calls).toMatchSnapshot();
});

// eslint-disable-next-line max-statements
test("finish with errors when some scripts fail", async () => {
  const scripts = [`node -e "console.log('Hi')"`, `node -e "process.exit(1)"`, `invalid_command`];
  const result = await run({ scripts, stdout: stdoutMock, stderr: stderrMock });

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
  expect(stderrMock.write).toHaveBeenCalledTimes(1);
  expect(stdoutMock.write.mock.calls).toMatchSnapshot();
  expect(stderrMock.write.mock.calls).toMatchSnapshot();
});

test("End-to-End via CLI", async () => {
  const { stdout, stderr } = await exec(resolve(pkg.bin), "run", `echo "Hi"`);

  expect(stdout).toMatchSnapshot();
  expect(stderr).toBe("");
});
