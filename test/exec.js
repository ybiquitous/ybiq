import path from 'path'
import cp from 'child_process'

const tested = path.join(process.cwd(), 'bin', 'cli.js')

export default function exec(...args) {
  const options = {
    env: { ...process.env, LANG: 'C' },
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
