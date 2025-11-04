import { readFileSync } from "node:fs";

/** @type {{ bin: string; } } */
export const pkg = JSON.parse(readFileSync(new URL("../../package.json", import.meta.url)));
