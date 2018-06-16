const assert = require('assert')
const exec = require('./helpers/exec')
const pkg = require('../package.json')

suite('version', () => {
  ;['--version', '-v'].forEach(option => {
    test(`with "${option}" option`, async () => {
      const { stdout, stderr } = await exec(option)
      assert(stdout.trim() === pkg.version)
      assert(stderr === '')
    })
  })
})
