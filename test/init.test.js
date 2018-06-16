const path = require('path')
const os = require('os')
const fs = require('fs-extra')
const test = require('tape')
const pkg = require('../package.json')
const init = require('../lib/init')

const readFile = file => fs.readFile(file, 'utf8')

const sandbox = async (fn, t) => {
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

    return await fn(t, {
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

test('init', t => {
  const testInSandbox = (name, fn) => {
    t.test(name, t => sandbox(fn, t))
  }

  testInSandbox('update "package.json"', async (t, ctx) => {
    const src = await ctx.fixture('package-normal.json')
    await init()
    const actual = await readFile(src)
    const expected = await ctx.readFixture('package-normal_expected.json')
    t.is(actual, expected)
    t.end()
  })

  testInSandbox('update "package.json" without fields', async (t, ctx) => {
    const src = await ctx.fixture('package-empty.json')
    await init()
    const actual = await readFile(src)
    const expected = await ctx.readFixture('package-empty_expected.json')
    t.is(actual, expected)
    t.end()
  })

  testInSandbox('write ".editorconfig"', async (t, ctx) => {
    await ctx.fixture('package-normal.json')
    await init()
    t.ok(ctx.logMessage().includes('package.json was updated.'))

    const original = await ctx.readOrigFile('.editorconfig')
    const copy = await ctx.readWorkFile('.editorconfig')
    t.is(original, copy)
    t.end()
  })

  testInSandbox('write ".prettierignore"', async (t, ctx) => {
    await ctx.fixture('package-normal.json')
    await init()
    t.ok(ctx.logMessage().includes('package.json was updated.'))

    const original = await ctx.readOrigFile('.prettierignore')
    const copy = await ctx.readWorkFile('.prettierignore')
    t.is(original, copy)
    t.end()
  })

  testInSandbox('write ".eslintrc.js"', async (t, ctx) => {
    await ctx.fixture('package-normal.json')
    await init()
    t.ok(ctx.logMessage().includes('.eslintrc.js was updated.'))

    const actual = await ctx.readWorkFile('.eslintrc.js')
    const expected = await ctx.readFixture('.eslintrc_expected.js')
    t.is(actual, expected)
    t.end()
  })

  testInSandbox('write ".commitlintrc.js"', async (t, ctx) => {
    await ctx.fixture('package-normal.json')
    await init()
    t.ok(ctx.logMessage().includes('.commitlintrc.js was updated.'))

    const actual = await ctx.readWorkFile('.commitlintrc.js')
    const expected = await ctx.readFixture('.commitlintrc_expected.js')
    t.is(actual, expected)
    t.end()
  })

  testInSandbox('throw error if no package.json', async t => {
    const error = await init().catch(err => err)
    t.ok(error instanceof Error)
    t.is(error.code, 'ENOENT')
    t.end()
  })
})
