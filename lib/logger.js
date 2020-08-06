const { EOL } = require("os");

/** @type {import("ybiq").Logger} */
module.exports.defaultLogger = (msg) => process.stdout.write(`${msg}${EOL}`);
