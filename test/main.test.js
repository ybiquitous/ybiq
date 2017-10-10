import assert from 'assert'
import main from '..'

suite('main', () => {
  test('init', async () => {
    const { init } = main
    assert(typeof init === 'function')
    assert(init.name === 'init')
  })
})
