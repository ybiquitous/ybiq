const yargs = require('yargs')
const init = require('./init')

process.on('unhandledRejection', (reason) => {
  process.stderr.write(reason.stack)
  process.exit(1)
})

module.exports = function cli() {
  // eslint-disable-next-line no-unused-expressions
  yargs
    .usage('$0 <command>')
    .command('init', init.desc, {}, init)
    .demandCommand(1)
    .strict()
    .alias('help', 'h')
    .alias('version', 'v')
    .argv
}
