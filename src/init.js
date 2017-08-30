const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const originalPackage = require('../package.json')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const targetProps = ['scripts', 'lint-staged']

module.exports = async function init(basedir = process.cwd()) {
  const packageFile = path.join(basedir, 'package.json')
  const packageInfo = JSON.parse(await readFile(packageFile, 'utf8'))

  targetProps.forEach((prop) => {
    packageInfo[prop] = { ...originalPackage[prop], ...packageInfo[prop] }
  })
  packageInfo.scripts['test:watch'] = `${packageInfo.scripts.test} --watch`

  await writeFile(packageFile, `${JSON.stringify(packageInfo, null, 2)}\n`)

  process.stdout.write(`${packageFile} was updated.\n`)
}
