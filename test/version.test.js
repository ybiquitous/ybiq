import assert from 'assert'
import { exec } from './helpers'
import pkg from '../package.json'

suite('version', () => {
  ;['--version', '-v'].forEach(option => {
    test(`with "${option}" option`, async () => {
      const { stdout, stderr } = await exec(option)
      assert(stdout.trim() === pkg.version)
      assert(stderr === '')
    })
  })
})
