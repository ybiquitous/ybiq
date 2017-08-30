import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import assert from 'assert'
import init from './init'

suite('init', () => {
  let workDir
  let packageJson

  setup('work directory', async () => {
    workDir = path.join(os.tmpdir(), `cli-${Date.now()}`)
    await fs.mkdirs(workDir)
  })

  setup('package.json', async () => {
    packageJson = path.join(workDir, 'package.json')
    await fs.writeJson(packageJson, {
      scripts: { test: 'abc' },
      'lint-staged': { '*.css': 'xyz' },
    })
  })

  teardown(async () => {
    await fs.remove(workDir)
  })

  test('write package.json', async () => {
    await init(workDir)
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

  test('write .editorconfig', async () => {
    await init(workDir)

    const original = await fs.readFile(path.join(__dirname, '..', '.editorconfig'), 'utf8')
    const wrote = await fs.readFile(path.join(workDir, '.editorconfig'), 'utf8')
    assert(original === wrote)
  })
})
