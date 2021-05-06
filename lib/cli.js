#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers"; // eslint-disable-line sort-imports

export default async function cli() {
  yargs(hideBin(process.argv)) // eslint-disable-line no-unused-expressions
    .usage("$0 <command>")
    .command(await import("./init.js")) // eslint-disable-line node/no-unsupported-features/es-syntax
    .demandCommand(1)
    .strict()
    .alias("help", "h")
    .alias("version", "v").argv;
}

cli();
