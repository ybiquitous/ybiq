const assert = require('assert')
const main = require('..')

suite('main', () => {
  test('init', async () => {
    const { init } = main
    assert(typeof init === 'function')
    assert(init.name === 'init')
  })
})
