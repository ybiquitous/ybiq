import test from 'ava'
import { promisify } from 'util'
import childProcess from 'child_process'
import path from 'path'

const execFile = promisify(childProcess.execFile)
const tested = path.join(__dirname, 'cli.js')

test('output help without command', async (t) => {
  const { code, stdout, stderr } = await t.throws(execFile(tested))
  t.true(code === 1)
  t.true(stdout === '')
  t.true(stderr.startsWith('ybiquitous <command>'))
  t.true(stderr.includes('init  Initialize Node.js project'))
})

test('output help with `--help` option', async (t) => {
  const { stdout, stderr } = await execFile(tested, ['--help'])
  t.true(stdout.startsWith('ybiquitous <command>'))
  t.true(stderr === '')
})
