import { promisify } from 'util'
import { execFile } from 'child_process'
import path from 'path'
import assert from 'assert'
import assertThrows from '../test/assert-throws'

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

suite('cli', () => {
  test('output help without any arguments', async () => {
    const error = await assertThrows(exec)
    const { code, stdout, stderr } = error
    assert(error instanceof Error)
    assert(code === 1)
    assert(stdout === '')
    assert(stderr.includes(HELP))
  })

  test('output help with `--help` option', async () => {
    const { stdout, stderr } = await exec('--help')
    assert(stdout.includes(HELP))
    assert(stderr === '')
  })
})
