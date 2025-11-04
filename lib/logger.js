import { EOL } from "node:os";

/** @import { Logger } from "../types/ybiq.d.ts"; */

/** @type {Logger} */
export const defaultLogger = (msg) => {
  process.stdout.write(`${msg}${EOL}`);
};
