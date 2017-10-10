#!/usr/bin/env node
const dir = require('../src/select-dir')

// for debug in Travis
process.stdout.write(`dir: ${dir}\n`)

require(`../${dir}/cli`)() // eslint-disable-line import/no-dynamic-require
