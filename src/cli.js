const yargs = require('yargs')
const init = require('./init')

module.exports = function cli() {
  // eslint-disable-next-line no-unused-expressions
  yargs
    .usage('ybiq <command>')
    .command('init', init.desc, {}, init)
    .demandCommand(1)
    .argv
}
