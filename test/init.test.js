import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import assert from 'assert'
import exec from './exec'

suite('init', () => {
  let workDir
  let originalDir
  let packageJson

  setup('work directory', async () => {
    workDir = path.join(os.tmpdir(), `cli-${Date.now()}`)
    await fs.mkdirs(workDir)

    originalDir = process.cwd()
    process.chdir(workDir)
  })

  setup('package.json', async () => {
    packageJson = path.join(workDir, 'package.json')
    await fs.writeJson(packageJson, {
      scripts: { test: 'abc' },
      'lint-staged': { '*.css': 'xyz' },
    })
  })

  teardown(async () => {
    process.chdir(originalDir)

    await fs.remove(workDir)
  })

  test('write package.json', async () => {
    await exec('init')
    const pkg = await fs.readJson(packageJson)

    assert.deepStrictEqual(pkg.scripts, {
      commitmsg: 'commitlint -e',
      'lint:js': 'eslint --max-warnings=-1 --ignore-path=.gitignore .',
      'lint:js:fix': 'npm run lint:js -- --fix',
      'lint:md': 'markdownlint *.md',
      lint: 'npm-run-all --parallel lint:js lint:md',
      precommit: 'lint-staged',
      release: 'standard-version',
      'release:dry-run': 'standard-version --dry-run',
      test: 'abc',
      'test:watch': 'abc --watch',
      'test:coverage': 'echo "unsupported." && exit 1',
      build: 'babel src/ -d lib/',
    })

    assert.deepStrictEqual(pkg['lint-staged'], {
      '*.{js,jsx}': [
        'eslint --fix --max-warnings=-1 --no-ignore',
        'git add',
      ],
      '*.md': 'markdownlint',
      '*.css': 'xyz',
    })
  })

  test('copy .editorconfig', async () => {
    await exec('init')

    const original = await fs.readFile(path.join(originalDir, '.editorconfig'), 'utf8')
    const copy = await fs.readFile(path.join(workDir, '.editorconfig'), 'utf8')
    assert(original === copy)
  })

  test('write .eslintrc.js', async () => {
    await exec('init')

    const wrote = await fs.readFile(path.join(workDir, '.eslintrc.js'), 'utf8')
    assert(wrote === `module.exports = {
  root: true,
  extends: ['ybiquitous'],
}
`)
  })
})
