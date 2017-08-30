const path = require('path')
const fs = require('fs-extra')
const originalPackage = require('../package.json')

const targetProps = ['scripts', 'lint-staged']

async function updatePackageFile(baseDir) {
  const packageFile = path.join(baseDir, 'package.json')
  const packageInfo = JSON.parse(await fs.readFile(packageFile, 'utf8'))

  targetProps.forEach((prop) => {
    packageInfo[prop] = { ...originalPackage[prop], ...packageInfo[prop] }
  })
  packageInfo.scripts['test:watch'] = `${packageInfo.scripts.test} --watch`

  await fs.writeFile(packageFile, `${JSON.stringify(packageInfo, null, 2)}\n`)

  process.stdout.write(`${packageFile} was updated.\n`)
}

async function copyEditorConfig(baseDir) {
  const source = path.join(__dirname, '..', '.editorconfig')
  const target = path.join(baseDir, '.editorconfig')
  await fs.copy(source, target)

  process.stdout.write(`${target} was updated.\n`)
}

module.exports = async function init(baseDir = process.cwd()) {
  await updatePackageFile(baseDir)

  await copyEditorConfig(baseDir)
}
