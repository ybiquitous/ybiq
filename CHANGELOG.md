<!-- markdownlint-disable -->
# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.4.0"></a>
# [1.4.0](https://github.com/ybiquitous/ybiq/compare/v1.3.0...v1.4.0) (2018-02-05)


### Bug Fixes

* **deps:** update dependency markdownlint-cli to ^0.7.0 ([#108](https://github.com/ybiquitous/ybiq/issues/108)) ([0b8a1fe](https://github.com/ybiquitous/ybiq/commit/0b8a1fe))
* **deps:** update dependency yargs to ^11.0.0 ([#104](https://github.com/ybiquitous/ybiq/issues/104)) ([2aeea90](https://github.com/ybiquitous/ybiq/commit/2aeea90))


### Features

* **markdownlint:** lint files recursively ([#109](https://github.com/ybiquitous/ybiq/issues/109)) ([20a7a1c](https://github.com/ybiquitous/ybiq/commit/20a7a1c))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/ybiquitous/ybiq/compare/v1.2.0...v1.3.0) (2018-01-19)


### Features

* **package:** update `[@commitlint](https://github.com/commitlint)` packages to 6.0.2 ([#92](https://github.com/ybiquitous/ybiq/issues/92)) ([b5457e5](https://github.com/ybiquitous/ybiq/commit/b5457e5))
* **package:** update to Babel 7 (beta) ([#96](https://github.com/ybiquitous/ybiq/issues/96)) ([7a99aa1](https://github.com/ybiquitous/ybiq/commit/7a99aa1))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ybiquitous/ybiq/compare/v1.1.0...v1.2.0) (2018-01-07)


### Bug Fixes

* **release:** `release:dry-run` script use `npm run` for DRY ([#79](https://github.com/ybiquitous/ybiq/issues/79)) ([a9546b9](https://github.com/ybiquitous/ybiq/commit/a9546b9))


### Features

* **commitlint:** add `[@commitlint](https://github.com/commitlint)/travis-cli` ([#88](https://github.com/ybiquitous/ybiq/issues/88)) ([019cd3c](https://github.com/ybiquitous/ybiq/commit/019cd3c))
* **commitlint:** add `$GIT_PARAMS` to `commitlint` command ([#78](https://github.com/ybiquitous/ybiq/issues/78)) ([d00784b](https://github.com/ybiquitous/ybiq/commit/d00784b))
* **package:** update `eslint-config-ybiquitous` to version 4.2.1 ([#83](https://github.com/ybiquitous/ybiq/issues/83)) ([059a7e1](https://github.com/ybiquitous/ybiq/commit/059a7e1))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ybiquitous/ybiq/compare/v1.0.1...v1.1.0) (2017-12-18)


### Features

* **editorconfig:** add `max_line_length` ([#65](https://github.com/ybiquitous/ybiq/issues/65)) ([756d7e3](https://github.com/ybiquitous/ybiq/commit/756d7e3))
* **editorconfig:** disable `trim_trailing_spaces` on markdown files ([#67](https://github.com/ybiquitous/ybiq/issues/67)) ([a0bb6f4](https://github.com/ybiquitous/ybiq/commit/a0bb6f4))
* **eslint:** add extension `.mjs` for ES modules ([#64](https://github.com/ybiquitous/ybiq/issues/64)) ([2cd62a2](https://github.com/ybiquitous/ybiq/commit/2cd62a2))
* **package:** update `prettier` to version 1.9.1 ([#72](https://github.com/ybiquitous/ybiq/issues/72)) ([14df958](https://github.com/ybiquitous/ybiq/commit/14df958))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ybiquitous/ybiq/compare/v1.0.0...v1.0.1) (2017-12-05)


### Bug Fixes

* **commitlint:** invalid config name (`config-angular`) ([#63](https://github.com/ybiquitous/ybiq/issues/63)) ([dc8b1a5](https://github.com/ybiquitous/ybiq/commit/dc8b1a5))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/ybiquitous/ybiq/compare/v0.6.0...v1.0.0) (2017-12-05)


### Bug Fixes

* **commitlint:** avoid Angular's new commit convention ([#58](https://github.com/ybiquitous/ybiq/issues/58)) ([97c1f41](https://github.com/ybiquitous/ybiq/commit/97c1f41))
* **eslint:** simplify `eslint` command options ([#60](https://github.com/ybiquitous/ybiq/issues/60)) ([ef5ec08](https://github.com/ybiquitous/ybiq/commit/ef5ec08))
* **release:** change commit message format to avoid CommitLint error ([#62](https://github.com/ybiquitous/ybiq/issues/62)) ([5303210](https://github.com/ybiquitous/ybiq/commit/5303210))


### Features

* **package:** update commitlint to version 5.0.1 ([#55](https://github.com/ybiquitous/ybiq/issues/55)) ([df150b5](https://github.com/ybiquitous/ybiq/commit/df150b5))
* **package:** update eslint to version 4.12.1 ([#57](https://github.com/ybiquitous/ybiq/issues/57)) ([3fa0a4e](https://github.com/ybiquitous/ybiq/commit/3fa0a4e))
* **package:** update eslint-config-ybiquitous to version 4.0.0 ([#61](https://github.com/ybiquitous/ybiq/issues/61)) ([49bcd40](https://github.com/ybiquitous/ybiq/commit/49bcd40))
* **package:** update lint-staged to version 6.0.0 ([#56](https://github.com/ybiquitous/ybiq/issues/56)) ([17c8c52](https://github.com/ybiquitous/ybiq/commit/17c8c52))


### BREAKING CHANGES

* **package:** `eslint-config-ybiquitous@4.0.0` uses Prettier, so code style may be changed by auto-fix.
* **package:** Angular's commit convention has removed the `chore` type. For details, see below links:

- https://github.com/marionebl/commitlint/releases/tag/v5.0.0
- https://github.com/angular/angular/blob/master/CONTRIBUTING.md

Also add `browserslist` settings to fix lint error.



<a name="0.6.0"></a>
# [0.6.0](https://github.com/ybiquitous/ybiq/compare/v0.5.0...v0.6.0) (2017-11-16)


### Bug Fixes

* show help when unknown command is given ([#52](https://github.com/ybiquitous/ybiq/issues/52)) ([5881bbd](https://github.com/ybiquitous/ybiq/commit/5881bbd))


### Features

* **package:** update lint-staged to version 5.0.0 ([#54](https://github.com/ybiquitous/ybiq/issues/54)) ([4fd9e3e](https://github.com/ybiquitous/ybiq/commit/4fd9e3e))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ybiquitous/ybiq/compare/v0.4.6...v0.5.0) (2017-10-24)


### Features

* **package:** update yargs to version 10.0.3 ([#43](https://github.com/ybiquitous/ybiq/issues/43)) ([e514983](https://github.com/ybiquitous/ybiq/commit/e514983))



<a name="0.4.6"></a>
## [0.4.6](https://github.com/ybiquitous/ybiq/compare/v0.4.5...v0.4.6) (2017-10-20)


### Bug Fixes

* **init:** missing `scripts` field in `package.json` ([#39](https://github.com/ybiquitous/ybiq/issues/39)) ([bf3e0cb](https://github.com/ybiquitous/ybiq/commit/bf3e0cb))
* **init:** output details and exit error code if unexpected error ([#40](https://github.com/ybiquitous/ybiq/issues/40)) ([1f8a042](https://github.com/ybiquitous/ybiq/commit/1f8a042))



<a name="0.4.5"></a>
## [0.4.5](https://github.com/ybiquitous/ybiq/compare/v0.4.4...v0.4.5) (2017-10-19)



<a name="0.4.4"></a>
## [0.4.4](https://github.com/ybiquitous/ybiq/compare/v0.4.3...v0.4.4) (2017-10-10)


### Bug Fixes

* **init:** add `standard-version` entry to `package.json` ([#32](https://github.com/ybiquitous/ybiq/issues/32)) ([17a9dc2](https://github.com/ybiquitous/ybiq/commit/17a9dc2))



<a name="0.4.3"></a>
## [0.4.3](https://github.com/ybiquitous/ybiq/compare/v0.4.2...v0.4.3) (2017-10-10)


### Bug Fixes

* **init:** `yarn lint` outputs more info ([#31](https://github.com/ybiquitous/ybiq/issues/31)) ([79644cf](https://github.com/ybiquitous/ybiq/commit/79644cf))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/ybiquitous/ybiq/compare/v0.4.1...v0.4.2) (2017-10-10)


### Bug Fixes

* add missing `-h` (help) and `-v` (version) aliases ([#30](https://github.com/ybiquitous/ybiq/issues/30)) ([74a70be](https://github.com/ybiquitous/ybiq/commit/74a70be))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/ybiquitous/ybiq/compare/v0.4.0...v0.4.1) (2017-10-10)


### Bug Fixes

* **init:** no update `lint:js` command ([#29](https://github.com/ybiquitous/ybiq/issues/29)) ([6f0acc9](https://github.com/ybiquitous/ybiq/commit/6f0acc9))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ybiquitous/ybiq/compare/v0.3.1...v0.4.0) (2017-10-10)


### Bug Fixes

* **init:** make *.jsx files ESLint's target ([#28](https://github.com/ybiquitous/ybiq/issues/28)) ([8a6899f](https://github.com/ybiquitous/ybiq/commit/8a6899f))


### Features

* **api:** support programmatic API ([#21](https://github.com/ybiquitous/ybiq/issues/21)) ([9c22a80](https://github.com/ybiquitous/ybiq/commit/9c22a80))
* **init:** add more details to `init` command help ([#27](https://github.com/ybiquitous/ybiq/issues/27)) ([b3c1270](https://github.com/ybiquitous/ybiq/commit/b3c1270))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/ybiquitous/ybiq/compare/v0.3.0...v0.3.1) (2017-09-25)


### Bug Fixes

* **init:** add missing files to be published ([#18](https://github.com/ybiquitous/ybiq/issues/18)) ([4d8d108](https://github.com/ybiquitous/ybiq/commit/4d8d108))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ybiquitous/ybiq/compare/v0.2.0...v0.3.0) (2017-09-25)


### Features

* support Node 6 ([#9](https://github.com/ybiquitous/ybiq/issues/9)) ([0085d90](https://github.com/ybiquitous/ybiq/commit/0085d90))
* use wildcard(*) for 'npm run lint' ([1e74176](https://github.com/ybiquitous/ybiq/commit/1e74176))
* **init:** write `commitlint.config.js` ([#15](https://github.com/ybiquitous/ybiq/issues/15)) ([a1266b8](https://github.com/ybiquitous/ybiq/commit/a1266b8))


### Performance Improvements

* prefer not babel code in Node 8+ ([#13](https://github.com/ybiquitous/ybiq/issues/13)) ([cb62636](https://github.com/ybiquitous/ybiq/commit/cb62636))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ybiquitous/ybiq/compare/v0.1.0...v0.2.0) (2017-09-20)


### Features

* add '--version' CLI option ([c87e0f1](https://github.com/ybiquitous/ybiq/commit/c87e0f1))



<a name="0.1.0"></a>
# 0.1.0 (2017-09-20)


### Bug Fixes

* call `init()` explicitly ([9ad8954](https://github.com/ybiquitous/ybiq/commit/9ad8954))
* output success message ([01b1dae](https://github.com/ybiquitous/ybiq/commit/01b1dae))


### Features

* add `npm run lint` via `npm-run-all` ([605b722](https://github.com/ybiquitous/ybiq/commit/605b722))
* add markdownlint ([717a345](https://github.com/ybiquitous/ybiq/commit/717a345))
* auto fix `test:watch` script ([0bce1f2](https://github.com/ybiquitous/ybiq/commit/0bce1f2))
* copy `.editorconfig` file on `init` command ([#2](https://github.com/ybiquitous/ybiq/issues/2)) ([c03020c](https://github.com/ybiquitous/ybiq/commit/c03020c))
* implement command-line script ([8b6a150](https://github.com/ybiquitous/ybiq/commit/8b6a150))
* rename project to `ybiq` ([#3](https://github.com/ybiquitous/ybiq/issues/3)) ([81899b4](https://github.com/ybiquitous/ybiq/commit/81899b4))
* write `.eslintrc.js` on `init` command ([e35110d](https://github.com/ybiquitous/ybiq/commit/e35110d))
