import { readFileSync } from "fs";

export const pkg = JSON.parse(readFileSync(new URL("../../package.json", import.meta.url)));
