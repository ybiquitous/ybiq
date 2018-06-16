import path from 'path'
import os from 'os'
import fs from 'fs-extra'
import assert from 'assert'
import pkg from '../package.json'
import init from '../lib/init'

const readFile = file => fs.readFile(file, 'utf8')

const sandbox = async fn => {
  const workDir = path.join(os.tmpdir(), `${pkg.name}${Date.now()}`)
  await fs.mkdirs(workDir)
  const origDir = process.cwd()
  process.chdir(workDir)

  const origLogger = process.stdout.write
  const logMsgs = []
  process.stdout.write = msg => logMsgs.push(msg)

  try {
    const fixturePath = name => path.join(__dirname, 'fixtures', name)
    const fixture = async name => {
      const src = fixturePath(name)
      const dest = path.join(workDir, 'package.json')
      await fs.copy(src, dest)
      return dest
    }

    return await fn({
      fixturePath,
      fixture,
      readFixture: name => readFile(fixturePath(name)),
      readOrigFile: name => readFile(path.join(origDir, name)),
      readWorkFile: name => readFile(path.join(workDir, name)),
      logMessage: () => logMsgs.join(''),
    })
  } finally {
    process.stdout.write = origLogger
    process.chdir(origDir)
    await fs.remove(workDir)
  }
}

const testInSandbox = (name, fn) => {
  test(name, () => sandbox(fn))
}

suite('init', () => {
  testInSandbox('update "package.json"', async ctx => {
    const src = await ctx.fixture('package-normal.json')
    await init()
    const actual = await readFile(src)
    const expected = await ctx.readFixture('package-normal_expected.json')
    assert(actual === expected)
  })

  testInSandbox('update "package.json" without fields', async ctx => {
    const src = await ctx.fixture('package-empty.json')
    await init()
    const actual = await readFile(src)
    const expected = await ctx.readFixture('package-empty_expected.json')
    assert(actual === expected)
  })

  testInSandbox('write ".editorconfig"', async ctx => {
    await ctx.fixture('package-normal.json')
    await init()
    assert(ctx.logMessage().includes('package.json was updated.'))

    const original = await ctx.readOrigFile('.editorconfig')
    const copy = await ctx.readWorkFile('.editorconfig')
    assert(original === copy)
  })

  testInSandbox('write ".prettierignore"', async ctx => {
    await ctx.fixture('package-normal.json')
    await init()
    assert(ctx.logMessage().includes('package.json was updated.'))

    const original = await ctx.readOrigFile('.prettierignore')
    const copy = await ctx.readWorkFile('.prettierignore')
    assert(original === copy)
  })

  testInSandbox('write ".eslintrc.js"', async ctx => {
    await ctx.fixture('package-normal.json')
    await init()
    assert(ctx.logMessage().includes('.eslintrc.js was updated.'))

    const actual = await ctx.readWorkFile('.eslintrc.js')
    const expected = await ctx.readFixture('.eslintrc_expected.js')
    assert(actual === expected)
  })

  testInSandbox('write ".commitlintrc.js"', async ctx => {
    await ctx.fixture('package-normal.json')
    await init()
    assert(ctx.logMessage().includes('.commitlintrc.js was updated.'))

    const actual = await ctx.readWorkFile('.commitlintrc.js')
    const expected = await ctx.readFixture('.commitlintrc_expected.js')
    assert(actual === expected)
  })

  testInSandbox('throw error if no package.json', async () => {
    const error = await init().catch(err => err)
    assert(error instanceof Error)
    assert(error.code === 'ENOENT')
  })
})
