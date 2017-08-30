import test from 'ava'
import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import init from './init'

let tmpdir
let packageFile

test.before(async () => {
  tmpdir = path.join(os.tmpdir(), `cli-${Date.now()}`)
  await fs.mkdirs(tmpdir)

  packageFile = path.join(tmpdir, 'package.json')
  await fs.writeJson(packageFile, {
    scripts: { test: 'abc' },
    'lint-staged': { '*.css': 'xyz' },
  })
})

test.after.always(async () => {
  await fs.remove(tmpdir)
})

test('init', async (t) => {
  await init(tmpdir)

  const pkg = await fs.readJson(packageFile)
  t.deepEqual(pkg.scripts, {
    commitmsg: 'commitlint -e',
    'lint:js': 'eslint --max-warnings=0 .',
    'lint:js:fix': 'eslint --max-warnings=0 . --fix',
    'lint:md': 'markdownlint *.md',
    lint: 'npm-run-all --parallel lint:js lint:md',
    precommit: 'lint-staged',
    release: 'standard-version',
    'release:dry-run': 'standard-version --dry-run',
    test: 'abc',
    'test:watch': 'ava --watch',
  })
  t.deepEqual(pkg['lint-staged'], {
    '*.{js,jsx}': [
      'eslint --fix --max-warnings=0 --no-ignore',
      'git add',
    ],
    '*.md': 'markdownlint',
    '*.css': 'xyz',
  })
})
