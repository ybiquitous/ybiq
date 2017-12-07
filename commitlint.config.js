module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'scope-enum': [
      2,
      'always',
      [
        '',
        'package',
        'readme',
        'eslint',
        'editorconfig',
        'commitlint',
        'coverage',
        'release',
        'init',
        'api',
      ],
    ],
  },
}
