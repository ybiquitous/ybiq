const yargs = require("yargs");

module.exports = function cli() {
  // eslint-disable-next-line no-unused-expressions
  yargs
    .usage("$0 <command>")
    .command(require("./init"))
    .demandCommand(1)
    .strict()
    .alias("help", "h")
    .alias("version", "v").argv;
};
