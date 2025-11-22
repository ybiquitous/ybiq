import { EOL } from "node:os";

/** @import { Logger } from "../types/ybiq.js" */

/** @type {Logger} */
export const defaultLogger = (msg) => {
  process.stdout.write(`${msg}${EOL}`);
};
