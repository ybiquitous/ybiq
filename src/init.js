const path = require('path')
const fs = require('fs-extra')
const originalPackage = require('../package.json')

const stdout = str => process.stdout.write(`${str}\n`)

const packagePath = (...pathElements) =>
  path.join(...[__dirname, '..', ...pathElements])

class Init {
  constructor(baseDir) {
    this.baseDir = baseDir
  }

  currentPath(...pathElements) {
    return path.join(...[this.baseDir, ...pathElements])
  }

  async writeFile(fileName, fileContent) {
    const file = this.currentPath(fileName)
    await fs.writeFile(file, `${fileContent}\n`)
    stdout(`${file} was updated.`)
  }

  async readFile(fileName) {
    return fs.readFile(this.currentPath(fileName), 'utf8')
  }

  async updatePackageFile() {
    const packageInfo = JSON.parse(await this.readFile('package.json'))

    // update 'scripts'
    if (!('scripts' in packageInfo)) {
      packageInfo.scripts = {}
    }
    const { scripts } = packageInfo
    if (!('test' in scripts)) {
      scripts.test = 'test'
    }
    Object.assign(scripts, {
      'test:watch': `${scripts.test} --watch`,
      'test:coverage': 'echo "unsupported." && exit 1',
    })
    Object.keys(originalPackage.scripts)
      .filter(key => !(key === 'test' || key.startsWith('test:')))
      .forEach(key => {
        scripts[key] = originalPackage.scripts[key]
      })

    // update other keys
    const keys = ['lint-staged', 'standard-version']
    keys.forEach(key => {
      if (!(key in packageInfo)) {
        packageInfo[key] = {}
      }
      Object.assign(packageInfo[key], originalPackage[key])
    })

    await this.writeFile('package.json', JSON.stringify(packageInfo, null, 2))
  }

  async copyEditorConfig() {
    const source = packagePath('.editorconfig')
    const target = this.currentPath('.editorconfig')
    await fs.copy(source, target)
    stdout(`${target} was updated.`)
  }

  async writeESLintConfig() {
    await this.writeFile(
      '.eslintrc.js',
      `module.exports = {
  root: true,
  extends: ['ybiquitous'],
}`
    )
  }

  async writeCommitlintConfig() {
    await this.writeFile(
      'commitlint.config.js',
      `module.exports = {
  extends: ['@commitlint/config-conventional'],
}`
    )
  }
}

module.exports = async function init() {
  const cmd = new Init(process.cwd())
  await cmd.updatePackageFile()
  await cmd.copyEditorConfig()
  await cmd.writeESLintConfig()
  await cmd.writeCommitlintConfig()
}

module.exports.desc = `Setup npm project:
- Update 'package.json'
- Create '.editorconfig'
- Create '.eslintrc.js'
- Create 'commitlint.config.js'`
