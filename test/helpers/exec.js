const path = require('path')
const cp = require('child_process')

const tested = path.join(process.cwd(), 'bin', 'cli.js')

module.exports = function exec(...args) {
  const options = {
    env: { ...process.env, LANG: 'C' },
  }
  const lastArg = args[args.length - 1]
  if (lastArg && typeof lastArg === 'object') {
    options.cwd = lastArg.cwd
  }
  return new Promise((resolve, reject) => {
    cp.execFile(tested, args, options, (error, stdout, stderr) => {
      if (error) {
        /* eslint-disable no-param-reassign */
        error.stdout = stdout
        error.stderr = stderr
        /* eslint-enable no-param-reassign */
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })
  })
}
