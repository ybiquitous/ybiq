import assert from 'assert'
import assertThrows from './assert-throws'
import exec from './exec'

const HELP = `
cli.js <command>

Commands:
  cli.js init  Setup npm project:
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
  });

  ['--help', '-h'].forEach((option) => {
    test(`with "${option}" option`, async () => {
      const { stdout, stderr } = await exec(option)
      assert(stdout.includes(HELP), stdout)
      assert(stderr === '')
    })
  })
})
