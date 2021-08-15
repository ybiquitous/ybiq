// eslint-disable-next-line import/no-unresolved, node/no-missing-import -- Prevent error: TS7016: Could not find a declaration file for module '../lib/index.js'
import * as ybiq from "..";

const noop = (arg?: unknown): void => {
  process.stdout.write(String(arg));
};

ybiq.init().then(() => noop());
ybiq.init({ cwd: "lib" }).then(() => noop());
ybiq.init({ logger: (msg: string) => noop(msg) }).then(() => noop());
ybiq.init({ cwd: "lib", logger: (msg: string) => noop(msg) }).then(() => noop);
