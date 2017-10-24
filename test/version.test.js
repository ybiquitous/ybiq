import assert from 'assert'
import exec from './exec'

suite('version', () => {
  const version = process.env.npm_package_version;

  ['--version', '-v'].forEach((option) => {
    test(`with '${option}' option`, async () => {
      const { stdout, stderr } = await exec(option)
      assert(stdout.trim() === version)
      assert(stderr === '')
    })
  })
})
