import test from 'ava'
import { promisify } from 'util'
import { execFile } from 'child_process'
import path from 'path'

const HELP = `
ybiquitous <command>

Commands:
  init  Initialize Node.js project

Options:
  --help  Show help                                                    [boolean]
`.trim()

function exec(...args) {
  const tested = path.join(__dirname, 'cli.js')
  const options = {
    env: Object.assign({}, process.env, { LANG: 'C' }),
  }
  return promisify(execFile)(tested, args, options)
}

test('output help without any arguments', async (t) => {
  const { code, stdout, stderr } = await t.throws(exec())
  t.true(code === 1)
  t.true(stdout === '')
  t.true(stderr.includes(HELP))
})

test('output help with `--help` option', async (t) => {
  const { stdout, stderr } = await exec('--help')
  t.true(stdout.includes(HELP))
  t.true(stderr === '')
})
