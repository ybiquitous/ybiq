const path = require('path')
const fs = require('fs-extra')
const originalPackage = require('../package.json')

const targetProps = ['scripts', 'lint-staged']

function stdout(str) {
  process.stdout.write(`${str}\n`)
}

class Init {
  constructor(baseDir) {
    this.baseDir = baseDir
  }

  filePath(fileName) {
    return path.join(this.baseDir, fileName)
  }

  async writeFile(fileName, fileContent) {
    const file = this.filePath(fileName)
    await fs.writeFile(file, `${fileContent}\n`)
    stdout(`${file} was updated.`)
  }

  async readFile(fileName) {
    return fs.readFile(path.join(this.baseDir, fileName), 'utf8')
  }

  async updatePackageFile() {
    const packageInfo = JSON.parse(await this.readFile('package.json'))

    targetProps.forEach((prop) => {
      packageInfo[prop] = { ...originalPackage[prop], ...packageInfo[prop] }
    })
    packageInfo.scripts['test:watch'] = `${packageInfo.scripts.test} --watch`
    packageInfo.scripts['test:coverage'] = 'echo "unsupported." && exit 1'

    await this.writeFile('package.json', JSON.stringify(packageInfo, null, 2))
  }

  async copyEditorConfig() {
    const source = path.join(__dirname, '..', '.editorconfig')
    const target = this.filePath('.editorconfig')
    await fs.copy(source, target)
    stdout(`${target} was updated.`)
  }

  async writeESLintConfig() {
    await this.writeFile('.eslintrc.js', `module.exports = {
  root: true,
  extends: ['ybiquitous'],
}`)
  }

  async writeCommitlintConfig() {
    await this.writeFile('commitlint.config.js', `module.exports = {
  extends: ['@commitlint/config-angular'],
}`)
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
