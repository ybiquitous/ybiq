import { execFile as originalExecFile } from "node:child_process";
import { promisify } from "node:util";

const execFile = promisify(originalExecFile);

export function exec(commandFile, ...args) {
  const options = {
    env: { ...process.env, LC_ALL: "C" },
  };
  const lastArgIndex = args.length - 1;
  const lastArg = args[lastArgIndex];
  let newArgs = args;
  if (lastArg && typeof lastArg === "object") {
    options.cwd = lastArg.cwd;
    newArgs = args.slice(0, lastArgIndex);
  }
  return execFile(commandFile, newArgs, options);
}
