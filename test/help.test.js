import assert from 'assert'
import exec from './helpers/exec'

const HELP = `
cli.js <command>

Commands:
  cli.js init  Setup npm project:
               - Update 'package.json'
               - Create '.commitlintrc.js'
               - Create '.editorconfig'
               - Create '.eslintrc.js'

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
`.trim()

suite('help', () => {
  ;[[], ['unknown'], ['unknown', 'xyz']].forEach(args => {
    test(`with arguments [${args.join(', ')}]`, async () => {
      const error = await exec(...args).catch(err => err)
      const { code, stdout, stderr } = error
      assert(error instanceof Error)
      assert(code === 1)
      assert(stdout === '')
      assert(stderr.includes(HELP), stderr)
    })
  })
  ;['--help', '-h'].forEach(option => {
    test(`with "${option}" option`, async () => {
      const { stdout, stderr } = await exec(option)
      assert(stdout.includes(HELP), stdout)
      assert(stderr === '')
    })
  })
})
