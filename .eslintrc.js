module.exports = {
  root: true,

  extends: ['ybiquitous'],

  overrides: [
    {
      files: ['**/test/**/*.js'],
      rules: {
        'no-shadow': ['error', { allow: ['t'] }],
      },
    },
  ],
}
