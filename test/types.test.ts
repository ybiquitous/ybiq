import * as ybiq from "..";

ybiq.init().then(() => console.log("none"));
ybiq.init({ cwd: "lib" }).then(() => console.log("none"));
ybiq.init({ logger: (msg: string) => {} }).then(() => console.log("none"));
ybiq.init({ cwd: "lib", logger: (msg: string) => {} }).then(() => console.log("none"));
