const dir = require('./src/select-dir')

// eslint-disable-next-line import/no-dynamic-require
const init = require(`./${dir}/init`)

module.exports = { init }
