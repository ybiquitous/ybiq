const cp = require("child_process");

module.exports = function exec(commandFile, ...args) {
  const options = {
    env: { ...process.env, LC_ALL: "C" },
  };
  const lastArgIndex = args.length - 1;
  const lastArg = args[lastArgIndex];
  let newArgs = args;
  if (lastArg && typeof lastArg === "object") {
    options.cwd = lastArg.cwd;
    newArgs = args.slice(0, lastArgIndex);
  }
  return new Promise((resolve, reject) => {
    cp.execFile(commandFile, newArgs, options, (error, stdout, stderr) => {
      if (error) {
        /* eslint-disable no-param-reassign */
        error.stdout = stdout;
        error.stderr = stderr;
        /* eslint-enable no-param-reassign */
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
};
