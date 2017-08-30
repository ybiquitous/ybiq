import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import assert from 'assert'
import init from './init'

suite('init', () => {
  let tmpdir
  let packageJson

  setup('work directory', async () => {
    tmpdir = path.join(os.tmpdir(), `cli-${Date.now()}`)
    await fs.mkdirs(tmpdir)
  })

  setup('package.json', async () => {
    packageJson = path.join(tmpdir, 'package.json')
    await fs.writeJson(packageJson, {
      scripts: { test: 'abc' },
      'lint-staged': { '*.css': 'xyz' },
    })
  })

  teardown(async () => {
    await fs.remove(tmpdir)
  })

  test('success', async () => {
    await init(tmpdir)
    const pkg = await fs.readJson(packageJson)

    assert.deepStrictEqual(pkg.scripts, {
      commitmsg: 'commitlint -e',
      'lint:js': 'eslint --max-warnings=0 .',
      'lint:js:fix': 'eslint --max-warnings=0 . --fix',
      'lint:md': 'markdownlint *.md',
      lint: 'npm-run-all --parallel lint:js lint:md',
      precommit: 'lint-staged',
      release: 'standard-version',
      'release:dry-run': 'standard-version --dry-run',
      test: 'abc',
      'test:watch': 'abc --watch',
    })

    assert.deepStrictEqual(pkg['lint-staged'], {
      '*.{js,jsx}': [
        'eslint --fix --max-warnings=0 --no-ignore',
        'git add',
      ],
      '*.md': 'markdownlint',
      '*.css': 'xyz',
    })
  })
})
