import * as ybiq from "../lib/index.js"; // eslint-disable-line n/no-missing-import

const noop = (arg?: unknown): void => {
  process.stdout.write(String(arg));
};

/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
ybiq.init().then(() => noop());
ybiq.init({ cwd: "lib" }).then(() => noop());
ybiq.init({ logger: (msg: string) => noop(msg) }).then(() => noop());
ybiq.init({ cwd: "lib", logger: (msg: string) => noop(msg) }).then(() => noop);
/* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
