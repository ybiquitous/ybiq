const { EOL } = require("os");

/** @type {import("../types/ybiq").Logger} */
module.exports.defaultLogger = (msg) => {
  process.stdout.write(`${msg}${EOL}`);
};
