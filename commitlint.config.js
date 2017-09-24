module.exports = {
  extends: ['@commitlint/config-angular'],

  rules: {
    'scope-enum': [2, 'always', [
      '',
      'package',
      'readme',
      'eslint',
      'commitlint',
      'coverage',
      'release',
      'init',
    ]],
  },
}
