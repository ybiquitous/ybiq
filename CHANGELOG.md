<!-- markdownlint-disable -->
# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
