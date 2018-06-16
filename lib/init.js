const path = require('path')
const fs = require('fs-extra')
const originalPackage = require('../package.json')

const stdout = str => process.stdout.write(`${str}\n`)

const packagePath = (...pathElements) =>
  path.join(...[__dirname, '..', ...pathElements])

const copyFile = async (src, dest) => {
  await fs.copy(src, dest)
  stdout(`${dest} was updated.`)
}

const template = name => path.join(__dirname, '..', 'templates', name)

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
    scripts['test:watch'] = `${scripts.test} --watch`
    scripts['test:coverage'] = 'echo "unsupported." && exit 1'
    Object.keys(originalPackage.scripts)
      .filter(key => !(key === 'test' || key.startsWith('test:')))
      .forEach(key => {
        scripts[key] = originalPackage.scripts[key]
      })

    // update other keys
    const keys = ['lint-staged']
    keys.forEach(key => {
      if (!(key in packageInfo)) {
        packageInfo[key] = {}
      }
      Object.assign(packageInfo[key], originalPackage[key])
    })

    await this.writeFile('package.json', JSON.stringify(packageInfo, null, 2))
  }

  async writeTemplateFile(name) {
    await copyFile(template(name), this.currentPath(name))
  }

  async writePackageFile(name) {
    await copyFile(packagePath(name), this.currentPath(name))
  }
}

module.exports = async function init() {
  const cmd = new Init(process.cwd())
  await cmd.updatePackageFile()
  await cmd.writePackageFile('.editorconfig')
  await cmd.writeTemplateFile('.eslintrc.js')
  await cmd.writeTemplateFile('.commitlintrc.js')
}

module.exports.desc = `Setup npm project:
- Update 'package.json'
- Create '.commitlintrc.js'
- Create '.editorconfig'
- Create '.eslintrc.js'`
