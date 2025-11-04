#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export default async function cli() {
  yargs(hideBin(process.argv)) // eslint-disable-line no-unused-expressions
    .usage("$0 <command>")
    .command(await import("./init.js"))
    // @ts-expect-error -- Ignore type error for dynamic import
    .command(await import("./run.js"))
    .demandCommand(1)
    .strict()
    .alias("help", "h")
    .alias("version", "v").argv;
}

cli();
