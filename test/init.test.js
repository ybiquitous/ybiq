import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import assert from 'assert'
import { assertThrows, exec } from './helpers'

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
      scripts: { test: 'abc', 'lint:js': 'eslint .' },
      'lint-staged': { '*.css': 'xyz' },
    })
  })

  teardown(async () => {
    process.chdir(originalDir)

    await fs.remove(workDir)
  })

  test('update "package.json"', async () => {
    await exec('init')
    const pkg = await fs.readJson(packageJson)

    assert.deepStrictEqual(pkg.scripts, {
      build: 'babel src/ -d lib/',
      commitmsg: 'commitlint -e',
      'lint:js': 'eslint --ignore-path .gitignore --ext .js,.jsx .',
      'lint:js:fix': 'npm run lint:js -- --fix',
      'lint:md': 'markdownlint *.md',
      lint: 'npm-run-all --print-name --print-label --parallel lint:*',
      precommit: 'lint-staged',
      release: 'standard-version',
      'release:dry-run': 'standard-version --dry-run',
      test: 'abc',
      'test:watch': 'abc --watch',
      'test:coverage': 'echo "unsupported." && exit 1',
    })

    assert.deepStrictEqual(pkg['lint-staged'], {
      '*.{js,jsx}': [
        'eslint --fix --no-ignore',
        'git add',
      ],
      '*.md': 'markdownlint',
      '*.css': 'xyz',
    })

    assert.deepStrictEqual(pkg['standard-version'], {
      scripts: {
        postchangelog: 'prepend CHANGELOG.md "<!-- markdownlint-disable -->\n"',
      },
    })
  })

  test('update "package.json" without fields', async () => {
    await fs.writeJson(packageJson, {})
    await exec('init')
    const pkg = await fs.readJson(packageJson)
    assert('scripts' in pkg)
    assert('test' in pkg.scripts)
    assert('lint-staged' in pkg)
    assert('standard-version' in pkg)
  })

  test('copy ".editorconfig"', async () => {
    await exec('init')

    const original = await fs.readFile(path.join(originalDir, '.editorconfig'), 'utf8')
    const copy = await fs.readFile(path.join(workDir, '.editorconfig'), 'utf8')
    assert(original === copy)
  })

  test('write ".eslintrc.js"', async () => {
    await exec('init')

    const wrote = await fs.readFile(path.join(workDir, '.eslintrc.js'), 'utf8')
    assert(wrote === `module.exports = {
  root: true,
  extends: ['ybiquitous'],
}
`)
  })

  test('write "commitlint.config.js"', async () => {
    await exec('init')

    const wrote = await fs.readFile(path.join(workDir, 'commitlint.config.js'), 'utf8')
    assert(wrote === `module.exports = {
  extends: ['@commitlint/config-angular'],
}
`)
  })

  test('throw error', async () => {
    await fs.remove(packageJson)
    const error = await assertThrows(() => exec('init'))
    const { code, stdout, stderr } = error
    assert(error instanceof Error)
    assert(code === 1)
    assert(stdout === '')
    assert(stderr.includes('Error: ENOENT:'), stderr)
  })
})
