# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [10.0.0](https://github.com/ybiquitous/ybiq/compare/v9.1.0...v10.0.0) (2020-01-22)

### ⚠ BREAKING CHANGES

- **commitlint:** drop support for Travis CI (#546)

### Features

- **commitlint:** drop support for Travis CI ([#546](https://github.com/ybiquitous/ybiq/issues/546)) ([7eb5412](https://github.com/ybiquitous/ybiq/commit/7eb541264aa46cb9632ff959fb1ee60a7e855211))
- **deps:** bump husky from 3.1.0 to 4.0.0 ([#531](https://github.com/ybiquitous/ybiq/issues/531)) ([7d609a7](https://github.com/ybiquitous/ybiq/commit/7d609a7fec4bcd341109f2ec30deb28300e5140d))
- **deps:** bump lint-staged from 9.5.0 to 10.0.1 ([#545](https://github.com/ybiquitous/ybiq/issues/545)) ([a0c9484](https://github.com/ybiquitous/ybiq/commit/a0c948408bccb72f13da1ae47d5b7db65d0f0589))

## [9.1.0](https://github.com/ybiquitous/ybiq/compare/v9.0.0...v9.1.0) (2019-09-13)

### Features

- **standard-version:** add `prerelease` hook ([#480](https://github.com/ybiquitous/ybiq/issues/480)) ([9258362](https://github.com/ybiquitous/ybiq/commit/9258362))

## [9.0.0](https://github.com/ybiquitous/ybiq/compare/v8.0.0...v9.0.0) (2019-09-09)

### ⚠ BREAKING CHANGES

- drop Node v8 and v9 support
- **deps:** `execa@2.0.2`, which `lint-staged@9` depends on, requires Node 8.12 at minimum
- **lint-staged:** the `lint-staged` field structure in `package.json` is changed

### Features

- update minimum Node to v10 ([#473](https://github.com/ybiquitous/ybiq/issues/473)) ([6c03057](https://github.com/ybiquitous/ybiq/commit/6c03057))
- **deps:** bump eslint from 5.16.0 to 6.3.0 ([#476](https://github.com/ybiquitous/ybiq/issues/476)) ([9806de7](https://github.com/ybiquitous/ybiq/commit/9806de7))
- **deps:** bump husky from 2.7.0 to 3.0.0 ([#438](https://github.com/ybiquitous/ybiq/issues/438)) ([ff6c8bb](https://github.com/ybiquitous/ybiq/commit/ff6c8bb))
- **deps:** bump lint-staged from 8.2.1 to 9.0.1 ([#439](https://github.com/ybiquitous/ybiq/issues/439)) ([3a0f7d0](https://github.com/ybiquitous/ybiq/commit/3a0f7d0))
- **deps:** bump remark-cli from 6.0.1 to 7.0.0 ([#453](https://github.com/ybiquitous/ybiq/issues/453)) ([166391e](https://github.com/ybiquitous/ybiq/commit/166391e))
- **deps:** bump standard-version from 6.0.1 to 7.0.0 ([#456](https://github.com/ybiquitous/ybiq/issues/456)) ([bad2836](https://github.com/ybiquitous/ybiq/commit/bad2836))
- **deps:** update `engines.node` to `>=8.12.0` ([#441](https://github.com/ybiquitous/ybiq/issues/441)) ([a44dd50](https://github.com/ybiquitous/ybiq/commit/a44dd50)), closes [sindresorhus/execa#319](https://github.com/sindresorhus/execa/issues/319)
- **lint-staged:** make settings more simple ([#440](https://github.com/ybiquitous/ybiq/issues/440)) ([9660b11](https://github.com/ybiquitous/ybiq/commit/9660b11))
- **prettier:** support `*.mdx` files ([#433](https://github.com/ybiquitous/ybiq/issues/433)) ([712402f](https://github.com/ybiquitous/ybiq/commit/712402f))

## [8.0.0](https://github.com/ybiquitous/ybiq/compare/v7.3.0...v8.0.0) (2019-06-24)

### Bug Fixes

- **remark:** missing linting on pre-commit ([#430](https://github.com/ybiquitous/ybiq/issues/430)) ([389aaa6](https://github.com/ybiquitous/ybiq/commit/389aaa6)), closes [#428](https://github.com/ybiquitous/ybiq/issues/428)
- **remark:** use official short plugin names ([#426](https://github.com/ybiquitous/ybiq/issues/426)) ([a387704](https://github.com/ybiquitous/ybiq/commit/a387704))

### Features

- **deps:** bump standard-version from 5.0.2 to 6.0.1 ([#393](https://github.com/ybiquitous/ybiq/issues/393)) ([7aac359](https://github.com/ybiquitous/ybiq/commit/7aac359))
- **eslint:** support TypeScript file extensions ([#427](https://github.com/ybiquitous/ybiq/issues/427)) ([5a2bb23](https://github.com/ybiquitous/ybiq/commit/5a2bb23))
- **remark:** remove `remark-lint-first-heading-level` package ([#423](https://github.com/ybiquitous/ybiq/issues/423)) ([ae09165](https://github.com/ybiquitous/ybiq/commit/ae09165))
- **remark:** remove `remark-lint-no-tabs` package ([#424](https://github.com/ybiquitous/ybiq/issues/424)) ([30e05ea](https://github.com/ybiquitous/ybiq/commit/30e05ea))
- **remark:** remove `remark-preset-lint-markdown-style-guide` package ([#425](https://github.com/ybiquitous/ybiq/issues/425)) ([6630938](https://github.com/ybiquitous/ybiq/commit/6630938))
- **remark:** stop auto-fix on pre-commit ([#428](https://github.com/ybiquitous/ybiq/issues/428)) ([48fbe47](https://github.com/ybiquitous/ybiq/commit/48fbe47))

### Tests

- fix unstable `help` test by locale on localhost ([#390](https://github.com/ybiquitous/ybiq/issues/390)) ([0716e88](https://github.com/ybiquitous/ybiq/commit/0716e88)), closes [/github.com/yargs/yargs/blob/51876e69c71e9861fb09847530eeaec9be534f5f/yargs.js#L1184](https://github.com/ybiquitous/ybiq/issues/L1184) [/github.com/sindresorhus/os-locale/blob/22e9f2e66e1493ffda58c9ed8f936f554bccb76f/index.js#L10](https://github.com/ybiquitous/ybiq/issues/L10)

### BREAKING CHANGES

- **remark:** please configure manually if you want to fix markdown files on pre-commit
- **remark:** please install it manually to keep same linting rules

<a name="7.3.0"></a>

# [7.3.0](https://github.com/ybiquitous/ybiq/compare/v7.2.2...v7.3.0) (2019-02-15)

### Features

- **deps:** bump standard-version from 4.4.0 to 5.0.0 ([#364](https://github.com/ybiquitous/ybiq/issues/364)) ([f125f0a](https://github.com/ybiquitous/ybiq/commit/f125f0a))

<a name="7.2.2"></a>

## [7.2.2](https://github.com/ybiquitous/ybiq/compare/v7.2.1...v7.2.2) (2019-02-02)

### Bug Fixes

- **remark:** disable rules conflicting with Prettier ([#349](https://github.com/ybiquitous/ybiq/issues/349)) ([1e45a84](https://github.com/ybiquitous/ybiq/commit/1e45a84))

<a name="7.2.1"></a>

## [7.2.1](https://github.com/ybiquitous/ybiq/compare/v7.2.0...v7.2.1) (2019-02-02)

### Bug Fixes

- **remark:** fix settings & scripts ([#346](https://github.com/ybiquitous/ybiq/issues/346)) ([f31a097](https://github.com/ybiquitous/ybiq/commit/f31a097))

<a name="7.2.0"></a>

# [7.2.0](https://github.com/ybiquitous/ybiq/compare/v7.1.0...v7.2.0) (2019-02-02)

### Bug Fixes

- **standard-version:** revert "simplify settings" ([#343](https://github.com/ybiquitous/ybiq/issues/343)) ([0356fc0](https://github.com/ybiquitous/ybiq/commit/0356fc0))

### Features

- **prettier:** support TypeScript extensions ([#345](https://github.com/ybiquitous/ybiq/issues/345)) ([208a988](https://github.com/ybiquitous/ybiq/commit/208a988))

<a name="7.1.0"></a>

# [7.1.0](https://github.com/ybiquitous/ybiq/compare/v7.0.0...v7.1.0) (2019-02-01)

### Features

- **editorconfig:** increase `max_line_length` ([#335](https://github.com/ybiquitous/ybiq/issues/335)) ([df7e35f](https://github.com/ybiquitous/ybiq/commit/df7e35f))
- **prettier:** add settings to `package.json` ([#337](https://github.com/ybiquitous/ybiq/issues/337)) ([761c33e](https://github.com/ybiquitous/ybiq/commit/761c33e))
- **remark:** add settings to `package.json` ([#336](https://github.com/ybiquitous/ybiq/issues/336)) ([a536e25](https://github.com/ybiquitous/ybiq/commit/a536e25))
- **standard-version:** simplify settings ([#334](https://github.com/ybiquitous/ybiq/issues/334)) ([bd0ff2b](https://github.com/ybiquitous/ybiq/commit/bd0ff2b))

<a name="7.0.0"></a>

# [7.0.0](https://github.com/ybiquitous/ybiq/compare/v6.0.0...v7.0.0) (2019-01-31)

### Bug Fixes

- **deps:** update `nodemon` for `event-stream` vulnerability ([#296](https://github.com/ybiquitous/ybiq/issues/296)) ([80b2a11](https://github.com/ybiquitous/ybiq/commit/80b2a11))
- **standard-version:** add `--no-verify` option ([#330](https://github.com/ybiquitous/ybiq/issues/330)) ([b9ecf57](https://github.com/ybiquitous/ybiq/commit/b9ecf57))

### Features

- **init:** drop `fs-extra` from runtime dependencies ([#285](https://github.com/ybiquitous/ybiq/issues/285)) ([2de76eb](https://github.com/ybiquitous/ybiq/commit/2de76eb))
- **prettier:** add npm scripts ([#321](https://github.com/ybiquitous/ybiq/issues/321)) ([3380443](https://github.com/ybiquitous/ybiq/commit/3380443))
- **remark:** migrate from `markdownlint` to `remark-lint` ([#326](https://github.com/ybiquitous/ybiq/issues/326)) ([d629afd](https://github.com/ybiquitous/ybiq/commit/d629afd))

### BREAKING CHANGES

- **remark:** `markdownlint` is unsupported no longer. It may fail linting your Markdown files.
- **init:** drop support Node 8.4- by using `fs.copyFile()`

http://nodejs.org/api/fs.html#fs_fs_copyfile_src_dest_flags_callback

<a name="6.0.0"></a>

# [6.0.0](https://github.com/ybiquitous/ybiq/compare/v5.0.1...v6.0.0) (2018-11-18)

### Bug Fixes

- **deps:** update `husky` from 1.1.3 to 1.1.4 ([#281](https://github.com/ybiquitous/ybiq/issues/281)) ([3f7447a](https://github.com/ybiquitous/ybiq/commit/3f7447a))
- **deps:** update `lint-staged` from 8.0.4 to 8.0.5 ([#282](https://github.com/ybiquitous/ybiq/issues/282)) ([fe3728f](https://github.com/ybiquitous/ybiq/commit/fe3728f))
- **deps:** update `yargs` from 12.0.2 to 12.0.4 ([#280](https://github.com/ybiquitous/ybiq/issues/280)) ([3de4120](https://github.com/ybiquitous/ybiq/commit/3de4120))
- **deps:** update all `dependencies` ([#283](https://github.com/ybiquitous/ybiq/issues/283)) ([60c6703](https://github.com/ybiquitous/ybiq/commit/60c6703))

### Features

- **commitlint:** move `.commitlintrc.js` to `package.json` ([#277](https://github.com/ybiquitous/ybiq/issues/277)) ([0884342](https://github.com/ybiquitous/ybiq/commit/0884342))
- **eslint:** move `.eslintrc.js` to `package.json` ([#278](https://github.com/ybiquitous/ybiq/issues/278)) ([5077193](https://github.com/ybiquitous/ybiq/commit/5077193))
- **prettier:** extend Prettier target files ([#273](https://github.com/ybiquitous/ybiq/issues/273)) ([a89ba5d](https://github.com/ybiquitous/ybiq/commit/a89ba5d))
- **prettier:** format CHANGELOG.md ([#274](https://github.com/ybiquitous/ybiq/issues/274)) ([be9a697](https://github.com/ybiquitous/ybiq/commit/be9a697))
- add `npm run format` script ([#279](https://github.com/ybiquitous/ybiq/issues/279)) ([293fbae](https://github.com/ybiquitous/ybiq/commit/293fbae))

### BREAKING CHANGES

- **eslint:** remove `.eslintrc.js` file
- **commitlint:** remove `.commitlintrc.js` file
- **prettier:** remove `.prettierignore` file
- **prettier:** `lint:md:fix` was replaced with `prettier:write`

<a name="5.0.1"></a>

## [5.0.1](https://github.com/ybiquitous/ybiq/compare/v5.0.0...v5.0.1) (2018-11-07)

### Bug Fixes

- **deps:** update dependency lint-staged to v8 ([#262](https://github.com/ybiquitous/ybiq/issues/262)) ([ea6af96](https://github.com/ybiquitous/ybiq/commit/ea6af96))

<a name="5.0.0"></a>

# [5.0.0](https://github.com/ybiquitous/ybiq/compare/v4.1.0...v5.0.0) (2018-09-26)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.13.0 ([#243](https://github.com/ybiquitous/ybiq/issues/243)) ([15b879b](https://github.com/ybiquitous/ybiq/commit/15b879b))

### Features

- **deps:** update dependency husky to v1 ([#253](https://github.com/ybiquitous/ybiq/issues/253)) ([d53ef7c](https://github.com/ybiquitous/ybiq/commit/d53ef7c))

### BREAKING CHANGES

- **deps:** update husky scripts because husky@1.0.0 has breaking changes

<a name="4.1.0"></a>

# [4.1.0](https://github.com/ybiquitous/ybiq/compare/v4.0.0...v4.1.0) (2018-08-11)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.12.0 ([#232](https://github.com/ybiquitous/ybiq/issues/232)) ([1f3bd43](https://github.com/ybiquitous/ybiq/commit/1f3bd43))

### Features

- **markdownlint:** remove "MD030" rule and enable default option ([#238](https://github.com/ybiquitous/ybiq/issues/238)) ([c4ac79c](https://github.com/ybiquitous/ybiq/commit/c4ac79c))
- **prettier:** add JSON support ([#240](https://github.com/ybiquitous/ybiq/issues/240)) ([c5eb5fa](https://github.com/ybiquitous/ybiq/commit/c5eb5fa))
- **prettier:** add YAML support ([#239](https://github.com/ybiquitous/ybiq/issues/239)) ([461f7d1](https://github.com/ybiquitous/ybiq/commit/461f7d1))

<a name="4.0.0"></a>

# [4.0.0](https://github.com/ybiquitous/ybiq/compare/v3.4.0...v4.0.0) (2018-07-17)

### Bug Fixes

- **deps:** update dependency fs-extra to v7 ([#227](https://github.com/ybiquitous/ybiq/issues/227)) ([cf738d9](https://github.com/ybiquitous/ybiq/commit/cf738d9))

### Features

- **eslint:** remove dependency on `eslint-config-ybiquitous` ([#228](https://github.com/ybiquitous/ybiq/issues/228)) ([ea04df3](https://github.com/ybiquitous/ybiq/commit/ea04df3))

### BREAKING CHANGES

- **eslint:** remove dependency on `eslint-config-ybiquitous` from `optionalDependencies`

<a name="3.4.0"></a>

# [3.4.0](https://github.com/ybiquitous/ybiq/compare/v3.3.3-0...v3.4.0) (2018-07-17)

### Features

- **standard-version:** add `--sign` option ([#226](https://github.com/ybiquitous/ybiq/issues/226)) ([42c4633](https://github.com/ybiquitous/ybiq/commit/42c4633))

<a name="3.3.3-0"></a>

## [3.3.3-0](https://github.com/ybiquitous/ybiq/compare/v3.3.2...v3.3.3-0) (2018-07-13)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.11.0 ([#223](https://github.com/ybiquitous/ybiq/issues/223)) ([a8d8a8d](https://github.com/ybiquitous/ybiq/commit/a8d8a8d))

<a name="3.3.2"></a>

## [3.3.2](https://github.com/ybiquitous/ybiq/compare/v3.3.1...v3.3.2) (2018-07-09)

### Bug Fixes

- **travis:** deploy failed caused by excluding builds on tags ([5e8a8e8](https://github.com/ybiquitous/ybiq/commit/5e8a8e8))

<a name="3.3.1"></a>

## [3.3.1](https://github.com/ybiquitous/ybiq/compare/v3.3.0...v3.3.1) (2018-07-09)

### Bug Fixes

- **init:** trim `--print-name` option from `npm-run-all` ([#218](https://github.com/ybiquitous/ybiq/issues/218)) ([2ceeb86](https://github.com/ybiquitous/ybiq/commit/2ceeb86))

<a name="3.3.0"></a>

# [3.3.0](https://github.com/ybiquitous/ybiq/compare/v3.2.0...v3.3.0) (2018-06-26)

### Bug Fixes

- **deps:** update dependency yargs to v12 ([cb6a1a1](https://github.com/ybiquitous/ybiq/commit/cb6a1a1))
- **eslint:** update settings and fix source code ([a236089](https://github.com/ybiquitous/ybiq/commit/a236089))

### Features

- **deps:** bump eslint from 4.19.1 to 5.0.1 ([544aeb6](https://github.com/ybiquitous/ybiq/commit/544aeb6))
- **deps:** update dependency eslint-config-ybiquitous to v5 ([46e8086](https://github.com/ybiquitous/ybiq/commit/46e8086))

<a name="3.2.0"></a>

# [3.2.0](https://github.com/ybiquitous/ybiq/compare/v3.1.1...v3.2.0) (2018-06-17)

### Bug Fixes

- **init:** missing `.markdownlint.json` on published package ([#204](https://github.com/ybiquitous/ybiq/issues/204)) ([54afaeb](https://github.com/ybiquitous/ybiq/commit/54afaeb))

### Features

- **init:** add new options (`cwd`, `logger`) to `init()` ([#203](https://github.com/ybiquitous/ybiq/issues/203)) ([7d8b30a](https://github.com/ybiquitous/ybiq/commit/7d8b30a))

<a name="3.1.1"></a>

## [3.1.1](https://github.com/ybiquitous/ybiq/compare/v3.1.0...v3.1.1) (2018-06-16)

### Bug Fixes

- **markdownlint:** disable `MD030` rule conflicting with Prettier ([#202](https://github.com/ybiquitous/ybiq/issues/202)) ([7878c5e](https://github.com/ybiquitous/ybiq/commit/7878c5e))

<a name="3.1.0"></a>

# [3.1.0](https://github.com/ybiquitous/ybiq/compare/v3.0.2...v3.1.0) (2018-06-16)

### Bug Fixes

- **commitlint:** correct `GIT_PARAMS` argument ([#192](https://github.com/ybiquitous/ybiq/issues/192)) ([373f549](https://github.com/ybiquitous/ybiq/commit/373f549))

### Features

- **eslint:** make `eslint-config-ybiquitous` optional ([#194](https://github.com/ybiquitous/ybiq/issues/194)) ([7c0eb9b](https://github.com/ybiquitous/ybiq/commit/7c0eb9b))
- **init:** improve `lint-staged` settings via `ignore` option ([#196](https://github.com/ybiquitous/ybiq/issues/196)) ([8fe523c](https://github.com/ybiquitous/ybiq/commit/8fe523c))
- **init:** remove `standard-version` custom settings ([#191](https://github.com/ybiquitous/ybiq/issues/191)) ([d49de38](https://github.com/ybiquitous/ybiq/commit/d49de38))
- **prettier:** add Markdown support ([#197](https://github.com/ybiquitous/ybiq/issues/197)) ([38d0d9c](https://github.com/ybiquitous/ybiq/commit/38d0d9c))

<a name="3.0.2"></a>

## [3.0.2](https://github.com/ybiquitous/ybiq/compare/v3.0.1...v3.0.2) (2018-06-16)

<a name="3.0.1"></a>

## [3.0.1](https://github.com/ybiquitous/ybiq/compare/v3.0.0...v3.0.1) (2018-06-08)

<a name="3.0.0"></a>

# [3.0.0](https://github.com/ybiquitous/ybiq/compare/v2.0.0...v3.0.0) (2018-06-08)

### Bug Fixes

- **deps:** update commitlint monorepo to v7 ([#181](https://github.com/ybiquitous/ybiq/issues/181)) ([3846081](https://github.com/ybiquitous/ybiq/commit/3846081))
- **deps:** update dependency fs-extra to v6 ([#157](https://github.com/ybiquitous/ybiq/issues/157)) ([702c498](https://github.com/ybiquitous/ybiq/commit/702c498))
- **deps:** update dependency markdownlint-cli to ^0.10.0 ([#177](https://github.com/ybiquitous/ybiq/issues/177)) ([54f2cde](https://github.com/ybiquitous/ybiq/commit/54f2cde))
- **deps:** update dependency markdownlint-cli to ^0.9.0 ([#171](https://github.com/ybiquitous/ybiq/issues/171)) ([76be9dd](https://github.com/ybiquitous/ybiq/commit/76be9dd))

### Features

- drop Node 6 support ([#169](https://github.com/ybiquitous/ybiq/issues/169)) ([4d5364e](https://github.com/ybiquitous/ybiq/commit/4d5364e))

### BREAKING CHANGES

- Stop supporting Node 6.x which is maintenance LTS.

<a name="2.0.0"></a>

# [2.0.0](https://github.com/ybiquitous/ybiq/compare/v1.4.1...v2.0.0) (2018-03-23)

### Bug Fixes

- **commitlint:** rename config file to `.commitlintrc.js` ([#123](https://github.com/ybiquitous/ybiq/issues/123)) ([8a4aef1](https://github.com/ybiquitous/ybiq/commit/8a4aef1))
- **deps:** update dependency lint-staged to ^7.0.0 ([#127](https://github.com/ybiquitous/ybiq/issues/127)) ([687c85d](https://github.com/ybiquitous/ybiq/commit/687c85d))
- **deps:** update dependency markdownlint-cli to ^0.8.0 ([#142](https://github.com/ybiquitous/ybiq/issues/142)) ([6043a26](https://github.com/ybiquitous/ybiq/commit/6043a26))
- **init:** use `templates/` directory ([#126](https://github.com/ybiquitous/ybiq/issues/126)) ([7e55ab5](https://github.com/ybiquitous/ybiq/commit/7e55ab5))

### Features

- **init:** migrate from `.commitlintrc.js` to `commitlint.config.js` ([#125](https://github.com/ybiquitous/ybiq/issues/125)) ([d8fc94e](https://github.com/ybiquitous/ybiq/commit/d8fc94e))

### BREAKING CHANGES

- **init:** same as other `*rc.js` files

<a name="1.4.1"></a>

## [1.4.1](https://github.com/ybiquitous/ybiq/compare/v1.4.0...v1.4.1) (2018-02-08)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.7.1 ([#113](https://github.com/ybiquitous/ybiq/issues/113)) ([85566e6](https://github.com/ybiquitous/ybiq/commit/85566e6))
- **markdownlint:** ignore CHANGELOG on pre-commit ([#115](https://github.com/ybiquitous/ybiq/issues/115)) ([0b27b2e](https://github.com/ybiquitous/ybiq/commit/0b27b2e))
- **markdownlint:** stop writing CHANGELOG.md before release ([#111](https://github.com/ybiquitous/ybiq/issues/111)) ([1baf050](https://github.com/ybiquitous/ybiq/commit/1baf050))

<a name="1.4.0"></a>

# [1.4.0](https://github.com/ybiquitous/ybiq/compare/v1.3.0...v1.4.0) (2018-02-05)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.7.0 ([#108](https://github.com/ybiquitous/ybiq/issues/108)) ([0b8a1fe](https://github.com/ybiquitous/ybiq/commit/0b8a1fe))
- **deps:** update dependency yargs to ^11.0.0 ([#104](https://github.com/ybiquitous/ybiq/issues/104)) ([2aeea90](https://github.com/ybiquitous/ybiq/commit/2aeea90))

### Features

- **markdownlint:** lint files recursively ([#109](https://github.com/ybiquitous/ybiq/issues/109)) ([20a7a1c](https://github.com/ybiquitous/ybiq/commit/20a7a1c))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/ybiquitous/ybiq/compare/v1.2.0...v1.3.0) (2018-01-19)

### Features

- **package:** update `[@commitlint](https://github.com/commitlint)` packages to 6.0.2 ([#92](https://github.com/ybiquitous/ybiq/issues/92)) ([b5457e5](https://github.com/ybiquitous/ybiq/commit/b5457e5))
- **package:** update to Babel 7 (beta) ([#96](https://github.com/ybiquitous/ybiq/issues/96)) ([7a99aa1](https://github.com/ybiquitous/ybiq/commit/7a99aa1))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/ybiquitous/ybiq/compare/v1.1.0...v1.2.0) (2018-01-07)

### Bug Fixes

- **release:** `release:dry-run` script use `npm run` for DRY ([#79](https://github.com/ybiquitous/ybiq/issues/79)) ([a9546b9](https://github.com/ybiquitous/ybiq/commit/a9546b9))

### Features

- **commitlint:** add `[@commitlint](https://github.com/commitlint)/travis-cli` ([#88](https://github.com/ybiquitous/ybiq/issues/88)) ([019cd3c](https://github.com/ybiquitous/ybiq/commit/019cd3c))
- **commitlint:** add `$GIT_PARAMS` to `commitlint` command ([#78](https://github.com/ybiquitous/ybiq/issues/78)) ([d00784b](https://github.com/ybiquitous/ybiq/commit/d00784b))
- **package:** update `eslint-config-ybiquitous` to version 4.2.1 ([#83](https://github.com/ybiquitous/ybiq/issues/83)) ([059a7e1](https://github.com/ybiquitous/ybiq/commit/059a7e1))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/ybiquitous/ybiq/compare/v1.0.1...v1.1.0) (2017-12-18)

### Features

- **editorconfig:** add `max_line_length` ([#65](https://github.com/ybiquitous/ybiq/issues/65)) ([756d7e3](https://github.com/ybiquitous/ybiq/commit/756d7e3))
- **editorconfig:** disable `trim_trailing_spaces` on markdown files ([#67](https://github.com/ybiquitous/ybiq/issues/67)) ([a0bb6f4](https://github.com/ybiquitous/ybiq/commit/a0bb6f4))
- **eslint:** add extension `.mjs` for ES modules ([#64](https://github.com/ybiquitous/ybiq/issues/64)) ([2cd62a2](https://github.com/ybiquitous/ybiq/commit/2cd62a2))
- **package:** update `prettier` to version 1.9.1 ([#72](https://github.com/ybiquitous/ybiq/issues/72)) ([14df958](https://github.com/ybiquitous/ybiq/commit/14df958))

<a name="1.0.1"></a>

## [1.0.1](https://github.com/ybiquitous/ybiq/compare/v1.0.0...v1.0.1) (2017-12-05)

### Bug Fixes

- **commitlint:** invalid config name (`config-angular`) ([#63](https://github.com/ybiquitous/ybiq/issues/63)) ([dc8b1a5](https://github.com/ybiquitous/ybiq/commit/dc8b1a5))

<a name="1.0.0"></a>

# [1.0.0](https://github.com/ybiquitous/ybiq/compare/v0.6.0...v1.0.0) (2017-12-05)

### Bug Fixes

- **commitlint:** avoid Angular's new commit convention ([#58](https://github.com/ybiquitous/ybiq/issues/58)) ([97c1f41](https://github.com/ybiquitous/ybiq/commit/97c1f41))
- **eslint:** simplify `eslint` command options ([#60](https://github.com/ybiquitous/ybiq/issues/60)) ([ef5ec08](https://github.com/ybiquitous/ybiq/commit/ef5ec08))
- **release:** change commit message format to avoid CommitLint error ([#62](https://github.com/ybiquitous/ybiq/issues/62)) ([5303210](https://github.com/ybiquitous/ybiq/commit/5303210))

### Features

- **package:** update commitlint to version 5.0.1 ([#55](https://github.com/ybiquitous/ybiq/issues/55)) ([df150b5](https://github.com/ybiquitous/ybiq/commit/df150b5))
- **package:** update eslint to version 4.12.1 ([#57](https://github.com/ybiquitous/ybiq/issues/57)) ([3fa0a4e](https://github.com/ybiquitous/ybiq/commit/3fa0a4e))
- **package:** update eslint-config-ybiquitous to version 4.0.0 ([#61](https://github.com/ybiquitous/ybiq/issues/61)) ([49bcd40](https://github.com/ybiquitous/ybiq/commit/49bcd40))
- **package:** update lint-staged to version 6.0.0 ([#56](https://github.com/ybiquitous/ybiq/issues/56)) ([17c8c52](https://github.com/ybiquitous/ybiq/commit/17c8c52))

### BREAKING CHANGES

- **package:** `eslint-config-ybiquitous@4.0.0` uses Prettier, so code style may be changed by auto-fix.
- **package:** Angular's commit convention has removed the `chore` type. For details, see below links:

* https://github.com/marionebl/commitlint/releases/tag/v5.0.0
* https://github.com/angular/angular/blob/master/CONTRIBUTING.md

Also add `browserslist` settings to fix lint error.

<a name="0.6.0"></a>

# [0.6.0](https://github.com/ybiquitous/ybiq/compare/v0.5.0...v0.6.0) (2017-11-16)

### Bug Fixes

- show help when unknown command is given ([#52](https://github.com/ybiquitous/ybiq/issues/52)) ([5881bbd](https://github.com/ybiquitous/ybiq/commit/5881bbd))

### Features

- **package:** update lint-staged to version 5.0.0 ([#54](https://github.com/ybiquitous/ybiq/issues/54)) ([4fd9e3e](https://github.com/ybiquitous/ybiq/commit/4fd9e3e))

<a name="0.5.0"></a>

# [0.5.0](https://github.com/ybiquitous/ybiq/compare/v0.4.6...v0.5.0) (2017-10-24)

### Features

- **package:** update yargs to version 10.0.3 ([#43](https://github.com/ybiquitous/ybiq/issues/43)) ([e514983](https://github.com/ybiquitous/ybiq/commit/e514983))

<a name="0.4.6"></a>

## [0.4.6](https://github.com/ybiquitous/ybiq/compare/v0.4.5...v0.4.6) (2017-10-20)

### Bug Fixes

- **init:** missing `scripts` field in `package.json` ([#39](https://github.com/ybiquitous/ybiq/issues/39)) ([bf3e0cb](https://github.com/ybiquitous/ybiq/commit/bf3e0cb))
- **init:** output details and exit error code if unexpected error ([#40](https://github.com/ybiquitous/ybiq/issues/40)) ([1f8a042](https://github.com/ybiquitous/ybiq/commit/1f8a042))

<a name="0.4.5"></a>

## [0.4.5](https://github.com/ybiquitous/ybiq/compare/v0.4.4...v0.4.5) (2017-10-19)

<a name="0.4.4"></a>

## [0.4.4](https://github.com/ybiquitous/ybiq/compare/v0.4.3...v0.4.4) (2017-10-10)

### Bug Fixes

- **init:** add `standard-version` entry to `package.json` ([#32](https://github.com/ybiquitous/ybiq/issues/32)) ([17a9dc2](https://github.com/ybiquitous/ybiq/commit/17a9dc2))

<a name="0.4.3"></a>

## [0.4.3](https://github.com/ybiquitous/ybiq/compare/v0.4.2...v0.4.3) (2017-10-10)

### Bug Fixes

- **init:** `yarn lint` outputs more info ([#31](https://github.com/ybiquitous/ybiq/issues/31)) ([79644cf](https://github.com/ybiquitous/ybiq/commit/79644cf))

<a name="0.4.2"></a>

## [0.4.2](https://github.com/ybiquitous/ybiq/compare/v0.4.1...v0.4.2) (2017-10-10)

### Bug Fixes

- add missing `-h` (help) and `-v` (version) aliases ([#30](https://github.com/ybiquitous/ybiq/issues/30)) ([74a70be](https://github.com/ybiquitous/ybiq/commit/74a70be))

<a name="0.4.1"></a>

## [0.4.1](https://github.com/ybiquitous/ybiq/compare/v0.4.0...v0.4.1) (2017-10-10)

### Bug Fixes

- **init:** no update `lint:js` command ([#29](https://github.com/ybiquitous/ybiq/issues/29)) ([6f0acc9](https://github.com/ybiquitous/ybiq/commit/6f0acc9))

<a name="0.4.0"></a>

# [0.4.0](https://github.com/ybiquitous/ybiq/compare/v0.3.1...v0.4.0) (2017-10-10)

### Bug Fixes

- **init:** make \*.jsx files ESLint's target ([#28](https://github.com/ybiquitous/ybiq/issues/28)) ([8a6899f](https://github.com/ybiquitous/ybiq/commit/8a6899f))

### Features

- **api:** support programmatic API ([#21](https://github.com/ybiquitous/ybiq/issues/21)) ([9c22a80](https://github.com/ybiquitous/ybiq/commit/9c22a80))
- **init:** add more details to `init` command help ([#27](https://github.com/ybiquitous/ybiq/issues/27)) ([b3c1270](https://github.com/ybiquitous/ybiq/commit/b3c1270))

<a name="0.3.1"></a>

## [0.3.1](https://github.com/ybiquitous/ybiq/compare/v0.3.0...v0.3.1) (2017-09-25)

### Bug Fixes

- **init:** add missing files to be published ([#18](https://github.com/ybiquitous/ybiq/issues/18)) ([4d8d108](https://github.com/ybiquitous/ybiq/commit/4d8d108))

<a name="0.3.0"></a>

# [0.3.0](https://github.com/ybiquitous/ybiq/compare/v0.2.0...v0.3.0) (2017-09-25)

### Features

- support Node 6 ([#9](https://github.com/ybiquitous/ybiq/issues/9)) ([0085d90](https://github.com/ybiquitous/ybiq/commit/0085d90))
- use wildcard(\*) for 'npm run lint' ([1e74176](https://github.com/ybiquitous/ybiq/commit/1e74176))
- **init:** write `commitlint.config.js` ([#15](https://github.com/ybiquitous/ybiq/issues/15)) ([a1266b8](https://github.com/ybiquitous/ybiq/commit/a1266b8))

### Performance Improvements

- prefer not babel code in Node 8+ ([#13](https://github.com/ybiquitous/ybiq/issues/13)) ([cb62636](https://github.com/ybiquitous/ybiq/commit/cb62636))

<a name="0.2.0"></a>

# [0.2.0](https://github.com/ybiquitous/ybiq/compare/v0.1.0...v0.2.0) (2017-09-20)

### Features

- add '--version' CLI option ([c87e0f1](https://github.com/ybiquitous/ybiq/commit/c87e0f1))

<a name="0.1.0"></a>

# 0.1.0 (2017-09-20)

### Bug Fixes

- call `init()` explicitly ([9ad8954](https://github.com/ybiquitous/ybiq/commit/9ad8954))
- output success message ([01b1dae](https://github.com/ybiquitous/ybiq/commit/01b1dae))

### Features

- add `npm run lint` via `npm-run-all` ([605b722](https://github.com/ybiquitous/ybiq/commit/605b722))
- add markdownlint ([717a345](https://github.com/ybiquitous/ybiq/commit/717a345))
- auto fix `test:watch` script ([0bce1f2](https://github.com/ybiquitous/ybiq/commit/0bce1f2))
- copy `.editorconfig` file on `init` command ([#2](https://github.com/ybiquitous/ybiq/issues/2)) ([c03020c](https://github.com/ybiquitous/ybiq/commit/c03020c))
- implement command-line script ([8b6a150](https://github.com/ybiquitous/ybiq/commit/8b6a150))
- rename project to `ybiq` ([#3](https://github.com/ybiquitous/ybiq/issues/3)) ([81899b4](https://github.com/ybiquitous/ybiq/commit/81899b4))
- write `.eslintrc.js` on `init` command ([e35110d](https://github.com/ybiquitous/ybiq/commit/e35110d))
