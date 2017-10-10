#!/usr/bin/env node
const dir = require('../src/select-dir')

require(`../${dir}/cli`)() // eslint-disable-line import/no-dynamic-require
