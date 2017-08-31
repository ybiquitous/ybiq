import path from 'path'
import { promisify } from 'util'
import { execFile } from 'child_process'

export default function exec(...args) {
  const tested = path.join(__dirname, '..', 'bin', 'cli.js')
  const options = {
    env: { ...process.env, LANG: 'C' },
  }
  return promisify(execFile)(tested, args, options)
}
