const yargs = require('yargs')
const init = require('./init')

module.exports = function cli() {
  // eslint-disable-next-line no-unused-expressions
  yargs
    .usage('ybiquitous <command>')
    .command({
      command: 'init',
      desc: 'Initialize Node.js project',
      handler: init,
    })
    .demandCommand(1)
    .help()
    .argv
}
