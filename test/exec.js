import path from 'path'
import util from 'util'
import cp from 'child_process'

const tested = path.join(process.cwd(), 'bin', 'cli.js')

export default function exec(...args) {
  const options = {
    env: { ...process.env, LANG: 'C' },
  }
  return util.promisify(cp.execFile)(tested, args, options)
}
