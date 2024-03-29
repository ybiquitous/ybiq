import * as ybiq from ".."; // eslint-disable-line import/extensions

const noop = (arg?: unknown): void => {
  process.stdout.write(String(arg));
};

ybiq.init().then(() => noop());
ybiq.init({ cwd: "lib" }).then(() => noop());
ybiq.init({ logger: (msg: string) => noop(msg) }).then(() => noop());
ybiq.init({ cwd: "lib", logger: (msg: string) => noop(msg) }).then(() => noop);
