import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import assert from 'assert'
import { assertThrows, exec } from './helpers'

const readFile = file => fs.readFile(file, 'utf8')

suite('init', () => {
  let workDir
  let originalDir

  const fixturePath = name => path.join(__dirname, 'fixtures', name)

  const fixture = async name => {
    const src = fixturePath(name)
    const dest = path.join(workDir, 'package.json')
    await fs.copy(src, dest)
    return dest
  }

  setup('work directory', async () => {
    workDir = path.join(
      os.tmpdir(),
      `${process.env.npm_package_name}${Date.now()}`
    )
    await fs.mkdirs(workDir)

    originalDir = process.cwd()
    process.chdir(workDir)
  })

  teardown(async () => {
    process.chdir(originalDir)

    await fs.remove(workDir)
  })

  test('update "package.json"', async () => {
    const src = await fixture('package-normal.json')
    await exec('init')
    const actual = await readFile(src)
    const expected = await readFile(fixturePath('package-normal_expected.json'))
    assert(actual === expected)
  })

  test('update "package.json" without fields', async () => {
    const src = await fixture('package-empty.json')
    await exec('init')
    const actual = await readFile(src)
    const expected = await readFile(fixturePath('package-empty_expected.json'))
    assert(actual === expected)
  })

  test('copy ".editorconfig"', async () => {
    await fixture('package-normal.json')
    await exec('init')

    const original = await readFile(path.join(originalDir, '.editorconfig'))
    const copy = await readFile(path.join(workDir, '.editorconfig'))
    assert(original === copy)
  })

  test('write ".eslintrc.js"', async () => {
    await fixture('package-normal.json')
    await exec('init')

    const actual = await readFile(path.join(workDir, '.eslintrc.js'))
    const expected = await readFile(fixturePath('.eslintrc_expected.js'))
    assert(actual === expected)
  })

  test('write "commitlint.config.js"', async () => {
    await fixture('package-normal.json')
    await exec('init')

    const actual = await readFile(path.join(workDir, 'commitlint.config.js'))
    const expected = await readFile(
      fixturePath('commitlint.config_expected.js')
    )
    assert(actual === expected)
  })

  test('throw error if no package.json', async () => {
    const error = await assertThrows(() => exec('init'))
    assert(error instanceof Error)
    assert(error.code === 1)
    assert(error.stdout === '')
    assert(error.stderr.includes('Error: ENOENT:'))
  })
})
