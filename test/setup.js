import fs from 'fs'
import cp from 'child_process'

if (!fs.existsSync('lib')) {
  cp.execSync('npm run build')
}
