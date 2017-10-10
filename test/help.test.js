import assert from 'assert'
import assertThrows from './assert-throws'
import exec from './exec'

const HELP = `
ybiq <command>

Commands:
  init  Setup npm project:
        - Update 'package.json'
        - Create '.editorconfig'
        - Create '.eslintrc.js'
        - Create 'commitlint.config.js'

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
`.trim()

suite('help', () => {
  test('without any arguments', async () => {
    const error = await assertThrows(() => exec())
    const { code, stdout, stderr } = error
    assert(error instanceof Error)
    assert(code === 1)
    assert(stdout === '')
    assert(stderr.includes(HELP), stderr)
  })

  test('with `--help` option', async () => {
    const { stdout, stderr } = await exec('--help')
    assert(stdout.includes(HELP), stdout)
    assert(stderr === '')
  })
})
