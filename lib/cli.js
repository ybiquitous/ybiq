#!/usr/bin/env node
import yargs from "yargs"; // eslint-disable-line import/default, import/namespace, import/no-deprecated
import { hideBin } from "yargs/helpers";

export default async function cli() {
  yargs(hideBin(process.argv)) // eslint-disable-line no-unused-expressions
    .usage("$0 <command>")
    .command(await import("./init.js"))
    .demandCommand(1)
    .strict()
    .alias("help", "h")
    .alias("version", "v").argv;
}

cli();
