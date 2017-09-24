#!/usr/bin/env node

const semver = require('semver')

if (semver.satisfies(process.version, '>=8')) {
  require('../src/cli')() // eslint-disable-line global-require
} else {
  require('../lib/cli')() // eslint-disable-line global-require
}
