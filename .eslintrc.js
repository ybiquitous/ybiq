module.exports = {
  root: true,

  extends: ['ybiquitous'],

  overrides: [
    {
      files: ['**/test/**/*.js'],
      env: {
        mocha: true,
      },
    },
  ],
}
