import { EOL } from "os";

/** @type {import("../types/ybiq").Logger} */
export const defaultLogger = (msg) => {
  process.stdout.write(`${msg}${EOL}`);
};
