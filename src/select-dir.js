const semver = require('semver')

module.exports = semver.satisfies(process.version, '>=8') ? 'src' : 'lib'
