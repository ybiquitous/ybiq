const yargs = require('yargs')
const init = require('./init')

module.exports = function cli() {
  // eslint-disable-next-line no-unused-expressions
  yargs
    .usage('ybiq <command>')
    .command({
      command: 'init',
      desc: 'Setup npm project',
      handler: () => init(),
    })
    .demandCommand(1)
    .help()
    .argv
}
