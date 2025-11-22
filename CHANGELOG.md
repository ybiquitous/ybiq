## [20.0.1](https://github.com/ybiquitous/ybiq/compare/v20.0.0...v20.0.1) (2025-11-22)

### Bug Fixes

- **types:** remove unneeded global types ([#2011](https://github.com/ybiquitous/ybiq/issues/2011)) ([e761049](https://github.com/ybiquitous/ybiq/commit/e761049f766cd44a97e0d42657b516fe70f55d4d))

## [20.0.0](https://github.com/ybiquitous/ybiq/compare/v19.2.0...v20.0.0) (2025-11-22)

### ⚠ BREAKING CHANGES

- **run:** remove the [`npm-run-all`](https://github.com/mysticatea/npm-run-all) dependency because it has been unmaintained for a long time

### Features

- **run:** add `ybiq run` command replacing `npm-run-all` ([#1993](https://github.com/ybiquitous/ybiq/issues/1993)) ([8b1f0c7](https://github.com/ybiquitous/ybiq/commit/8b1f0c7ef7b7734114f4b4b8ac3cbf077339053a))

## [19.2.0](https://github.com/ybiquitous/ybiq/compare/v19.1.0...v19.2.0) (2025-11-20)

### Features

- **init:** add `overrides` for `conventional-changelog-conventionalcommits` to `package.json` ([#1998](https://github.com/ybiquitous/ybiq/issues/1998)) ([c068527](https://github.com/ybiquitous/ybiq/commit/c068527b1a16364c0106f155e923682c1f31fd92))
- **init:** pin GitHub Actions versions in `npm-audit-fix` and `npm-diff` workflows ([#2000](https://github.com/ybiquitous/ybiq/issues/2000)) ([c63cf77](https://github.com/ybiquitous/ybiq/commit/c63cf770c3db6c0c48419926d0ca7e9d34e9517e))
- **init:** remove useless `standard-version` field in `package.json` ([#1997](https://github.com/ybiquitous/ybiq/issues/1997)) ([36143d4](https://github.com/ybiquitous/ybiq/commit/36143d4037ee9b23c6237df9fe8388c1999eb2ca))

## [19.1.0](https://github.com/ybiquitous/ybiq/compare/v19.0.1...v19.1.0) (2025-11-04)

### Features

- **deps:** bump ybiquitous/.github from 2.1.5 to 2.2.0 ([#1989](https://github.com/ybiquitous/ybiq/issues/1989)) ([e2b244b](https://github.com/ybiquitous/ybiq/commit/e2b244b6fdaff56a32fdf0c8179d5dc3507614be))

### Bug Fixes

- **deps:** bump ybiquitous/.github from 2.1.3 to 2.1.4 ([#1983](https://github.com/ybiquitous/ybiq/issues/1983)) ([d56fed1](https://github.com/ybiquitous/ybiq/commit/d56fed11948d34dbdbce93489432eb02d9a6cdcc))
- **deps:** bump ybiquitous/.github from 2.1.4 to 2.1.5 ([#1984](https://github.com/ybiquitous/ybiq/issues/1984)) ([9f93c54](https://github.com/ybiquitous/ybiq/commit/9f93c54a25705242496818b9b9b0765b316cbe57))
- **deps:** bump ybiquitous/.github from 2.2.0 to 2.2.1 ([#1991](https://github.com/ybiquitous/ybiq/issues/1991)) ([7cf8277](https://github.com/ybiquitous/ybiq/commit/7cf8277f37a694c184283f06ee9bbde61e195a0d))

## [19.0.1](https://github.com/ybiquitous/ybiq/compare/v19.0.0...v19.0.1) (2025-10-23)

### Bug Fixes

- **deps:** bump the commitlint group from v19 to v20 ([#1974](https://github.com/ybiquitous/ybiq/issues/1974)) ([35ea930](https://github.com/ybiquitous/ybiq/commit/35ea930bd1bd600beb1a1d4c0f9e3c7ef4409d36))
- **deps:** bump ybiquitous/.github from 1.0.3 to 2.1.3 ([#1975](https://github.com/ybiquitous/ybiq/issues/1975)) ([3ab4bf9](https://github.com/ybiquitous/ybiq/commit/3ab4bf9640ecd74674d5031228448084b267cc7b))

## [19.0.0](https://github.com/ybiquitous/ybiq/compare/v18.1.0...v19.0.0) (2025-09-26)

### ⚠ BREAKING CHANGES

- `CHANGELOG.md` is reformatted ([#1957](https://github.com/ybiquitous/ybiq/issues/1957))
- `husky/post-commit` is removed ([#1957](https://github.com/ybiquitous/ybiq/issues/1957))
- The new release workflow requires creating a pull request before publishing ([#1960](https://github.com/ybiquitous/ybiq/issues/1960))

### Features

- **changelog:** migrate `standard-version` to `conventional-changelog` ([#1957](https://github.com/ybiquitous/ybiq/issues/1957)) ([7ab4ed5](https://github.com/ybiquitous/ybiq/commit/7ab4ed5c1a92555e17abdb531a0cb79d3795b3a4))
- **deps:** bump actions/checkout from 4 to 5 ([#1944](https://github.com/ybiquitous/ybiq/issues/1944)) ([bf04d42](https://github.com/ybiquitous/ybiq/commit/bf04d423f5ba123e5b4f6527ab597d1826f1f946))
- **init:** add `npm run changelog:dryrun` script ([#1963](https://github.com/ybiquitous/ybiq/issues/1963)) ([01ad3f7](https://github.com/ybiquitous/ybiq/commit/01ad3f7150a94823ba8074b555cf0d14d51ed399))
- **init:** change release workflow ([#1960](https://github.com/ybiquitous/ybiq/issues/1960)) ([08a472e](https://github.com/ybiquitous/ybiq/commit/08a472e67479355a59078e12aa00c0532b6d2448))

### Bug Fixes

- **deps:** bump ybiquitous/.github from 1.0.2 to 1.0.3 ([#1971](https://github.com/ybiquitous/ybiq/issues/1971)) ([fd95430](https://github.com/ybiquitous/ybiq/commit/fd95430d492add42f9368b17561c606ec94458bc))
- **init:** `npm run changelog` to respect first release and no full commit logs ([#1965](https://github.com/ybiquitous/ybiq/issues/1965)) ([e6a847b](https://github.com/ybiquitous/ybiq/commit/e6a847b89583f50de3ef4b65d9c755ac030c7d8b))

## [18.1.0](https://github.com/ybiquitous/ybiq/compare/v18.0.0...v18.1.0) (2025-08-11)

### Features

- **actions:** support npm trusted publishing with OIDC ([#1943](https://github.com/ybiquitous/ybiq/issues/1943)) ([1787f4b](https://github.com/ybiquitous/ybiq/commit/1787f4b66bbea9704ba6564aefd4028a83e38527))

### Bug Fixes

- **deps:** bump yargs from 17.7.2 to 18.0.0 ([#1908](https://github.com/ybiquitous/ybiq/issues/1908)) ([fa40a09](https://github.com/ybiquitous/ybiq/commit/fa40a09982547687e8a0419d96063f86287b86bb))

## [18.0.0](https://github.com/ybiquitous/ybiq/compare/v17.4.0...v18.0.0) (2025-05-20)

### ⚠ BREAKING CHANGES

- remove Node.js 18 support (#1901)

### Features

- **actions:** add Node.js 24 to test matrix ([#1902](https://github.com/ybiquitous/ybiq/issues/1902)) ([8d1b861](https://github.com/ybiquitous/ybiq/commit/8d1b86156eb1a7458b3808bb331922444d3eb990))
- **actions:** run tests regularly and manually ([#1900](https://github.com/ybiquitous/ybiq/issues/1900)) ([46f81f9](https://github.com/ybiquitous/ybiq/commit/46f81f9a8257819e3309aaf423e22b40d5f63cf9))
- **deps:** bump lint-staged from 15.5.1 to 16.0.0 ([#1895](https://github.com/ybiquitous/ybiq/issues/1895)) ([ac9b8f2](https://github.com/ybiquitous/ybiq/commit/ac9b8f2086f94793acfcb1394e9227d5e795ccef))
- **deps:** bump ybiquitous/npm-audit-fix-action from 6 to 7 ([#1857](https://github.com/ybiquitous/ybiq/issues/1857)) ([196e0a3](https://github.com/ybiquitous/ybiq/commit/196e0a355139c469c8929bb62af1403346c5a4e9))
- remove Node.js 18 support ([#1901](https://github.com/ybiquitous/ybiq/issues/1901)) ([41811f1](https://github.com/ybiquitous/ybiq/commit/41811f14a51deb5a4a95ce87dfeb5a891befc2be))

### Bug Fixes

- **actions:** explicitly specify permissions to all jobs for security ([#1899](https://github.com/ybiquitous/ybiq/issues/1899)) ([90492bb](https://github.com/ybiquitous/ybiq/commit/90492bb4e2cdb09a384aae5531cb9bda779063c7))

## [17.4.0](https://github.com/ybiquitous/ybiq/compare/v17.3.0...v17.4.0) (2024-07-22)

### Features

- **husky:** remove no longer needed `npm exec` since 9.1.1 ([#1760](https://github.com/ybiquitous/ybiq/issues/1760)) ([2d0af12](https://github.com/ybiquitous/ybiq/commit/2d0af12407a148bebb02ff86ad8c90f62df6ee79))

## [17.3.0](https://github.com/ybiquitous/ybiq/compare/v17.2.0...v17.3.0) (2024-05-01)

### Features

- **actions:** add Node.js 22 to test matrix ([#1729](https://github.com/ybiquitous/ybiq/issues/1729)) ([6189917](https://github.com/ybiquitous/ybiq/commit/61899179ed84020a3e67c5ccaa6408a6e48ecf3c))

### Bug Fixes

- **deps:** bump the commitlint group with 2 updates to v19 ([#1707](https://github.com/ybiquitous/ybiq/issues/1707)) ([4c7f066](https://github.com/ybiquitous/ybiq/commit/4c7f066596e69e857cbfbd683c375a3a16a068ea))

## [17.2.0](https://github.com/ybiquitous/ybiq/compare/v17.1.0...v17.2.0) (2024-01-30)

### Features

- **commitlint:** loosen `body-max-line-length` from 100 to 300 ([#1690](https://github.com/ybiquitous/ybiq/issues/1690)) ([fdead22](https://github.com/ybiquitous/ybiq/commit/fdead22a1c5008067ccdff7438e4a64a251400bf))
- **husky:** replace `npx --no-install` with `npm exec --no` ([#1691](https://github.com/ybiquitous/ybiq/issues/1691)) ([ec3af44](https://github.com/ybiquitous/ybiq/commit/ec3af441149f47471145a24c602028a7acde805b))

## [17.1.0](https://github.com/ybiquitous/ybiq/compare/v17.0.0...v17.1.0) (2024-01-29)

### Features

- **deps:** bump husky from 8.0.3 to 9.0.6 ([#1689](https://github.com/ybiquitous/ybiq/issues/1689)) ([f6c3e51](https://github.com/ybiquitous/ybiq/commit/f6c3e511634557ad53e8d109d52b42f7c076ebd0))

## [17.0.0](https://github.com/ybiquitous/ybiq/compare/v16.3.1...v17.0.0) (2023-12-26)

### ⚠ BREAKING CHANGES

- remove Node.js 16 support (#1661)

### Features

- **deps:** bump `@commitlint/*` from 17.8.0 to 18.4.3 ([#1659](https://github.com/ybiquitous/ybiq/issues/1659)) ([1610d09](https://github.com/ybiquitous/ybiq/commit/1610d094e9506f533256a00db96a39297c6cb0ad))
- **deps:** bump lint-staged from 14.0.1 to 15.1.0 ([#1652](https://github.com/ybiquitous/ybiq/issues/1652)) ([da3a382](https://github.com/ybiquitous/ybiq/commit/da3a382c547a85663f48e558e6187cc55398ca93))
- **deps:** bump ybiquitous/npm-audit-fix-action from 5 to 6 ([#1673](https://github.com/ybiquitous/ybiq/issues/1673)) ([a7106c6](https://github.com/ybiquitous/ybiq/commit/a7106c6482a6daaa218f5e4420b0214dfa3e0f5a))
- remove Node.js 16 support ([#1661](https://github.com/ybiquitous/ybiq/issues/1661)) ([cd72806](https://github.com/ybiquitous/ybiq/commit/cd7280624ea1ed1c7d4f18c9e23d178dfed4f711))

## [16.3.1](https://github.com/ybiquitous/ybiq/compare/v16.3.0...v16.3.1) (2023-09-26)

### Bug Fixes

- **deps:** bump remark-cli from 11.0.0 to 12.0.0 ([#1617](https://github.com/ybiquitous/ybiq/issues/1617)) ([af00d20](https://github.com/ybiquitous/ybiq/commit/af00d20e08d3f01a2421051f92a3197f957c8a50))

## [16.3.0](https://github.com/ybiquitous/ybiq/compare/v16.2.1...v16.3.0) (2023-09-11)

### Features

- **deps:** bump actions/checkout from 3 to 4 ([#1609](https://github.com/ybiquitous/ybiq/issues/1609)) ([41600e3](https://github.com/ybiquitous/ybiq/commit/41600e3415e0b8cd8f688487f07785c6b6260725))

## [16.2.1](https://github.com/ybiquitous/ybiq/compare/v16.2.0...v16.2.1) (2023-08-14)

### Bug Fixes

- **deps:** bump lint-staged from 13.2.3 to 14.0.0 ([#1590](https://github.com/ybiquitous/ybiq/issues/1590)) ([a8b9c7c](https://github.com/ybiquitous/ybiq/commit/a8b9c7c84874355cd17971d5475c37bc4dc41a6c))

## [16.2.0](https://github.com/ybiquitous/ybiq/compare/v16.1.0...v16.2.0) (2023-07-10)

### Features

- **deps:** bump prettier from 2.8.8 to 3.0.0 ([#1571](https://github.com/ybiquitous/ybiq/issues/1571)) ([4fda9be](https://github.com/ybiquitous/ybiq/commit/4fda9be0a44bae37184e8869f7fc0e5ca16d8d62))

## [16.1.0](https://github.com/ybiquitous/ybiq/compare/v16.0.0...v16.1.0) (2023-05-20)

### Features

- **actions:** add `dependabot-auto-merge.yml` workflow ([#1541](https://github.com/ybiquitous/ybiq/issues/1541)) ([3d1c77a](https://github.com/ybiquitous/ybiq/commit/3d1c77a8125b7b2046a4d9080b2d1d4b298b5a43))

## [16.0.0](https://github.com/ybiquitous/ybiq/compare/v15.6.0...v16.0.0) (2023-04-24)

### ⚠ BREAKING CHANGES

- Node.js 14 support is removed since it's End-of-Life.

This change also adds Node.js 20 to the CI matrix.

### Features

- **init:** support provenance publishing ([#1523](https://github.com/ybiquitous/ybiq/issues/1523)) ([35e29a9](https://github.com/ybiquitous/ybiq/commit/35e29a9f07b62a6fc0f6d0229d1873c6ff065575))
- remove Node.js 14 support ([#1522](https://github.com/ybiquitous/ybiq/issues/1522)) ([72b7ace](https://github.com/ybiquitous/ybiq/commit/72b7ace602e7cd12d82ddc8923c8843be626537b))

## [15.6.0](https://github.com/ybiquitous/ybiq/compare/v15.5.3...v15.6.0) (2023-01-08)

### Features

- **deps:** bump ybiquitous/npm-audit-fix-action from 4 to 5 ([#1450](https://github.com/ybiquitous/ybiq/issues/1450)) ([a472f89](https://github.com/ybiquitous/ybiq/commit/a472f89c4bfd104b7c6151fe40ea576e53abf8dc))

## [15.5.3](https://github.com/ybiquitous/ybiq/compare/v15.5.2...v15.5.3) (2023-01-04)

### Bug Fixes

- **actions:** `permissions.contents` for `npm-audit-fix` ([#1449](https://github.com/ybiquitous/ybiq/issues/1449)) ([604619c](https://github.com/ybiquitous/ybiq/commit/604619c2063b421548a10f44f4ea0e5b1804fca0))

## [15.5.2](https://github.com/ybiquitous/ybiq/compare/v15.5.1...v15.5.2) (2022-12-03)

### Bug Fixes

- **actions:** improve "npm diff" workflow ([#1426](https://github.com/ybiquitous/ybiq/issues/1426)) ([2916c73](https://github.com/ybiquitous/ybiq/commit/2916c73cb67d1a2a42bbc9c77942c737cd43bb68))

## [15.5.1](https://github.com/ybiquitous/ybiq/compare/v15.5.0...v15.5.1) (2022-11-29)

### Bug Fixes

- **editorconfig:** use `trim_trailing_whitespace` instead of `trim_trailing_spaces` ([#1423](https://github.com/ybiquitous/ybiq/issues/1423)) ([6717182](https://github.com/ybiquitous/ybiq/commit/67171821741c75a03095a4f3bc5f7ab3b4205459))
- update `CommandParams` type ([7722547](https://github.com/ybiquitous/ybiq/commit/7722547a8fb216d7fbb95d652412bd5949467154))

## [15.5.0](https://github.com/ybiquitous/ybiq/compare/v15.4.1...v15.5.0) (2022-10-03)

### Features

- **init:** better `test:*` sub commands ([#1384](https://github.com/ybiquitous/ybiq/issues/1384)) ([dc8ed09](https://github.com/ybiquitous/ybiq/commit/dc8ed09f907eaa64c80966f2dc361c7fc6e4438d))

## [15.4.1](https://github.com/ybiquitous/ybiq/compare/v15.4.0...v15.4.1) (2022-09-08)

### Bug Fixes

- **actions:** add permissions ([#1363](https://github.com/ybiquitous/ybiq/issues/1363)) ([cbb2b39](https://github.com/ybiquitous/ybiq/commit/cbb2b397843f6e2176b3a8d617cf08bd357b9f17))
- **actions:** improve job name for `npm diff` workflow ([#1364](https://github.com/ybiquitous/ybiq/issues/1364)) ([65de5ff](https://github.com/ybiquitous/ybiq/commit/65de5ffcc573c3e852087cdccd8b0184a608f76b))

## [15.4.0](https://github.com/ybiquitous/ybiq/compare/v15.3.1...v15.4.0) (2022-09-08)

### Features

- **commitlint:** integrate commitlint and lint ([#1362](https://github.com/ybiquitous/ybiq/issues/1362)) ([47a9596](https://github.com/ybiquitous/ybiq/commit/47a9596bf88521ce20864ecbcd27760264d349cd))

## [15.3.1](https://github.com/ybiquitous/ybiq/compare/v15.3.0...v15.3.1) (2022-09-08)

### Bug Fixes

- **actions:** pass npm token to release workflow ([#1361](https://github.com/ybiquitous/ybiq/issues/1361)) ([2573648](https://github.com/ybiquitous/ybiq/commit/2573648db60ce173909b1a4fff75513d3499b1b5))

## [15.3.0](https://github.com/ybiquitous/ybiq/compare/v15.2.0...v15.3.0) (2022-09-08)

### Features

- **actions:** use reusable release workflow ([#1360](https://github.com/ybiquitous/ybiq/issues/1360)) ([a5661fd](https://github.com/ybiquitous/ybiq/commit/a5661fdeda7c85810846fa39d04ad6938a02640b))
- **actions:** use reusable workflows ([#1359](https://github.com/ybiquitous/ybiq/issues/1359)) ([592d238](https://github.com/ybiquitous/ybiq/commit/592d2385266c8f01b0101ee5cf1f18f89836bc46))

### Bug Fixes

- **editorconfig:** remove extra comment ([#1358](https://github.com/ybiquitous/ybiq/issues/1358)) ([f3d4919](https://github.com/ybiquitous/ybiq/commit/f3d49191b3fb7674af74836c7da809eca0707650))

## [15.2.0](https://github.com/ybiquitous/ybiq/compare/v15.1.2...v15.2.0) (2022-06-20)

### Features

- **prettier:** add `--cache` option ([#1305](https://github.com/ybiquitous/ybiq/issues/1305)) ([0860daa](https://github.com/ybiquitous/ybiq/commit/0860daa6a1d95a85f21ccec95f7e54007445c8a1))

## [15.1.2](https://github.com/ybiquitous/ybiq/compare/v15.1.1...v15.1.2) (2022-06-20)

### Bug Fixes

- **deps:** bump wagoid/commitlint-github-action from 4 to 5 ([#1301](https://github.com/ybiquitous/ybiq/issues/1301)) ([438f221](https://github.com/ybiquitous/ybiq/commit/438f2214af2e4c87358eca76d257a35330f2aad8))

## [15.1.1](https://github.com/ybiquitous/ybiq/compare/v15.1.0...v15.1.1) (2022-06-13)

### Bug Fixes

- **deps:** bump lint-staged from 12.4.3 to 13.0.1 ([#1295](https://github.com/ybiquitous/ybiq/issues/1295)) ([2554828](https://github.com/ybiquitous/ybiq/commit/255482885c16f6c4e055e539cad1b3b8318ff275))

## [15.1.0](https://github.com/ybiquitous/ybiq/compare/v15.0.0...v15.1.0) (2022-05-31)

### Features

- **deps:** bump @commitlint/cli from 16.2.4 to 17.0.1 ([#1276](https://github.com/ybiquitous/ybiq/issues/1276)) ([0dd2ded](https://github.com/ybiquitous/ybiq/commit/0dd2ded69ff05f92c6d7ff78d921dd213d469e3f))
- **deps:** bump @commitlint/config-conventional from 16.2.4 to 17.0.0 ([#1275](https://github.com/ybiquitous/ybiq/issues/1275)) ([bf07abd](https://github.com/ybiquitous/ybiq/commit/bf07abd75e6f97277a54db5026c500751f71028a))

## [15.0.0](https://github.com/ybiquitous/ybiq/compare/v14.3.0...v15.0.0) (2022-05-11)

### ⚠ BREAKING CHANGES

- **actions:** The "commitlint" workflow is unified into the "test" workflow and removed.
- **actions:** Node.js v12 is End-of-Life. The support is dropped.

### Features

- **actions:** auto-generate release notes ([#1258](https://github.com/ybiquitous/ybiq/issues/1258)) ([f8e38fb](https://github.com/ybiquitous/ybiq/commit/f8e38fbdc5ec97c58359b9308ede2382d54243cf))
- **actions:** drop Node.js v12 support ([#1253](https://github.com/ybiquitous/ybiq/issues/1253)) ([44cfc56](https://github.com/ybiquitous/ybiq/commit/44cfc568280fa1aed57952868956df8ea3d30c30))
- **actions:** remove needless "commitlint" workflow if exists ([#1263](https://github.com/ybiquitous/ybiq/issues/1263)) ([acaba94](https://github.com/ybiquitous/ybiq/commit/acaba94d9009eedab4ba2bd5b56cce3dcc7102cc))
- **actions:** simplify workflows and jobs ([#1257](https://github.com/ybiquitous/ybiq/issues/1257)) ([2df37d7](https://github.com/ybiquitous/ybiq/commit/2df37d7da663e43ed4c35136bf82c2732020e75b))
- **deps:** bump husky from 7.0.4 to 8.0.1 ([#1254](https://github.com/ybiquitous/ybiq/issues/1254)) ([043900f](https://github.com/ybiquitous/ybiq/commit/043900fe8d713313a8047f5fd5ff5ab99956f500))
- **deps:** require Node.js 14.14.0 as a minimum ([#1259](https://github.com/ybiquitous/ybiq/issues/1259)) ([1ff217d](https://github.com/ybiquitous/ybiq/commit/1ff217d43c362de2987d53981e9fd6f69298f3ae))
- **deps:** require Node.js 14.17.0 as a minimum ([#1260](https://github.com/ybiquitous/ybiq/issues/1260)) ([6ddb17b](https://github.com/ybiquitous/ybiq/commit/6ddb17b16acee1d1f990c897c3aabc9e4d26f56c))
- **init:** show removed files ([#1264](https://github.com/ybiquitous/ybiq/issues/1264)) ([1f3e869](https://github.com/ybiquitous/ybiq/commit/1f3e86997f1c7eb556614022bf87b1460774d7a7))

### Bug Fixes

- **husky:** shebang and `dirname` in hook shell scripts ([#1256](https://github.com/ybiquitous/ybiq/issues/1256)) ([ee70357](https://github.com/ybiquitous/ybiq/commit/ee70357ab562b7391ac06c36dd22d5f29d08eaef))
- use `node:` protocol for Node.js core modules ([#1261](https://github.com/ybiquitous/ybiq/issues/1261)) ([7e99d88](https://github.com/ybiquitous/ybiq/commit/7e99d88f21f5d3efbfb2415b9154a3ea21ad7997))

## [14.3.0](https://github.com/ybiquitous/ybiq/compare/v14.2.0...v14.3.0) (2022-04-23)

### Features

- **actions:** add Node.js 18 to test matrix ([#1231](https://github.com/ybiquitous/ybiq/issues/1231)) ([8d9bde8](https://github.com/ybiquitous/ybiq/commit/8d9bde8e2f61556728996aacab317b327b3dd7d1))

## [14.2.0](https://github.com/ybiquitous/ybiq/compare/v14.1.0...v14.2.0) (2022-03-07)

### Features

- **actions:** bump actions/checkout from 2 to 3 ([#1201](https://github.com/ybiquitous/ybiq/issues/1201)) ([f4de497](https://github.com/ybiquitous/ybiq/commit/f4de497a8cfa2ad1cd6a495c223e87b1b4eefc10))
- **actions:** bump ybiquitous/npm-audit-fix-action from 3 to 4 ([#1204](https://github.com/ybiquitous/ybiq/issues/1204)) ([2d0a916](https://github.com/ybiquitous/ybiq/commit/2d0a916289e3bb8192d38014a07fcdec7718ccad)), closes [#1200](https://github.com/ybiquitous/ybiq/issues/1200)

## [14.1.0](https://github.com/ybiquitous/ybiq/compare/v14.0.1...v14.1.0) (2022-02-28)

### Features

- **actions:** bump actions/setup-node from 2 to 3 ([#1195](https://github.com/ybiquitous/ybiq/issues/1195)) ([385e2d5](https://github.com/ybiquitous/ybiq/commit/385e2d5936865a5de5d0edf153f537fa06f3857d))

## [14.0.1](https://github.com/ybiquitous/ybiq/compare/v14.0.0...v14.0.1) (2021-12-29)

### Bug Fixes

- **deps:** bump @commitlint/\* from 15.0.0 to 16.0.0 ([#1150](https://github.com/ybiquitous/ybiq/issues/1150)) ([a504b20](https://github.com/ybiquitous/ybiq/commit/a504b20f54d48bf82fb1406b0687b6f418b66be5))

## [14.0.0](https://github.com/ybiquitous/ybiq/compare/v13.8.0...v14.0.0) (2021-12-14)

### ⚠ BREAKING CHANGES

- **init:** `npm test` runs not only testing, but also linting.
- **init:** `npm run prettier:*` scripts are no longer supported.

### Features

- **init:** add `pretest` script ([#1142](https://github.com/ybiquitous/ybiq/issues/1142)) ([0055333](https://github.com/ybiquitous/ybiq/commit/0055333789676d3c6e545c4d828206dfcaedfb22))
- **init:** rename prettier scripts ([#1141](https://github.com/ybiquitous/ybiq/issues/1141)) ([b2eef5b](https://github.com/ybiquitous/ybiq/commit/b2eef5be8b14ff5f374486425001b1b68473fcf3))

### Bug Fixes

- **init:** remove needless linting from `prerelease` script ([#1143](https://github.com/ybiquitous/ybiq/issues/1143)) ([ffce671](https://github.com/ybiquitous/ybiq/commit/ffce6719eec231cb1f278e96a4e69ba782bdc7da)), closes [#1142](https://github.com/ybiquitous/ybiq/issues/1142)

## [13.8.0](https://github.com/ybiquitous/ybiq/compare/v13.7.1...v13.8.0) (2021-12-14)

### Features

- **deps:** bump eslint from 7.32.0 to 8.4.1 ([#1133](https://github.com/ybiquitous/ybiq/issues/1133)) ([659b555](https://github.com/ybiquitous/ybiq/commit/659b5555560455274817a5e8be4199d42abb1460))

### Bug Fixes

- **deps:** bump @commitlint/cli from 13.2.1 to 14.1.0 ([#1105](https://github.com/ybiquitous/ybiq/issues/1105)) ([e14a21c](https://github.com/ybiquitous/ybiq/commit/e14a21cf7e322135a058329328ddb756fb86d769))
- **deps:** bump @commitlint/cli from 14.1.0 to 15.0.0 ([#1116](https://github.com/ybiquitous/ybiq/issues/1116)) ([5f5228d](https://github.com/ybiquitous/ybiq/commit/5f5228d4cec8eaa1f2558a863d532532ef6dced3))
- **deps:** bump @commitlint/config-conventional from 13.2.0 to 14.1.0 ([#1107](https://github.com/ybiquitous/ybiq/issues/1107)) ([700a16c](https://github.com/ybiquitous/ybiq/commit/700a16c8363587f74de4a20a8230ac46935a91ea))
- **deps:** bump @commitlint/config-conventional from 14.1.0 to 15.0.0 ([#1114](https://github.com/ybiquitous/ybiq/issues/1114)) ([450248a](https://github.com/ybiquitous/ybiq/commit/450248a5826b17a81bd7ae2c8658e4a0419d0cd5))
- **deps:** bump lint-staged from 11.2.6 to 12.0.2 ([#1111](https://github.com/ybiquitous/ybiq/issues/1111)) ([b31ffa5](https://github.com/ybiquitous/ybiq/commit/b31ffa5ad84717e31c1e7abf6183f9d2a83db17e))
- **deps:** bump lint-staged from 12.0.2 to 12.1.1 ([#1117](https://github.com/ybiquitous/ybiq/issues/1117)) ([e926515](https://github.com/ybiquitous/ybiq/commit/e9265151083965f1982d6ecb5cab8aaa532b772b))

## [13.7.1](https://github.com/ybiquitous/ybiq/compare/v13.7.0...v13.7.1) (2021-09-27)

### Bug Fixes

- **actions:** make the test job names more clear ([#1064](https://github.com/ybiquitous/ybiq/issues/1064)) ([90117d1](https://github.com/ybiquitous/ybiq/commit/90117d1c9892c3ecc10ea29d205e98c6d0cfe5ac))
- **actions:** use LTS syntax for `node-version` ([#1065](https://github.com/ybiquitous/ybiq/issues/1065)) ([6123db6](https://github.com/ybiquitous/ybiq/commit/6123db6eac48308ad9cca0429a0d3027a77512b9))

## [13.7.0](https://github.com/ybiquitous/ybiq/compare/v13.6.0...v13.7.0) (2021-08-15)

### Features

- **eslint:** add `--ext` flag to `npm run lint:js` ([#1035](https://github.com/ybiquitous/ybiq/issues/1035)) ([0df9ed0](https://github.com/ybiquitous/ybiq/commit/0df9ed0252bbf70d5f28bdcde14abf4a3a2080ef))
- **eslint:** support `.cjs` extensions ([#1034](https://github.com/ybiquitous/ybiq/issues/1034)) ([f6bd459](https://github.com/ybiquitous/ybiq/commit/f6bd4590914cd8dac726e8cd2d5298eebcf009f5))

## [13.6.0](https://github.com/ybiquitous/ybiq/compare/v13.5.1...v13.6.0) (2021-08-15)

### Features

- **deps:** bump remark-cli from 9.0.0 to 10.0.0 ([#1028](https://github.com/ybiquitous/ybiq/issues/1028)) ([9ad515f](https://github.com/ybiquitous/ybiq/commit/9ad515f88c6dbb86e39c13637b6a15dc741d77cf))

### Bug Fixes

- replace `main` with `exports` in package.json ([#1032](https://github.com/ybiquitous/ybiq/issues/1032)) ([4290ff8](https://github.com/ybiquitous/ybiq/commit/4290ff8df3d2a2c007efe6f66c03579ed848cf77))

## [13.5.1](https://github.com/ybiquitous/ybiq/compare/v13.5.0...v13.5.1) (2021-08-03)

### Bug Fixes

- **actions:** update `files` for `npm-diff.yml` ([#1025](https://github.com/ybiquitous/ybiq/issues/1025)) ([a84a348](https://github.com/ybiquitous/ybiq/commit/a84a348f0610bb4494090de66b2ee427faca7e0e)), closes [#1024](https://github.com/ybiquitous/ybiq/issues/1024)

## [13.5.0](https://github.com/ybiquitous/ybiq/compare/v13.4.0...v13.5.0) (2021-08-03)

### Features

- **actions:** add `ybiquitous/npm-diff-action` ([#1024](https://github.com/ybiquitous/ybiq/issues/1024)) ([c4a6a24](https://github.com/ybiquitous/ybiq/commit/c4a6a246e4bf7ef582137fe8d197b55b7a368320))

## [13.4.0](https://github.com/ybiquitous/ybiq/compare/v13.3.0...v13.4.0) (2021-08-02)

### Features

- **eslint:** use cache ([#1023](https://github.com/ybiquitous/ybiq/issues/1023)) ([60a83d3](https://github.com/ybiquitous/ybiq/commit/60a83d3c1f8d83a8cc742b06b0128b9919d6344c))

## [13.3.0](https://github.com/ybiquitous/ybiq/compare/v13.2.1...v13.3.0) (2021-08-02)

### Features

- **actions:** use cache for `actions/setup-node` ([#1017](https://github.com/ybiquitous/ybiq/issues/1017)) ([fb4ff11](https://github.com/ybiquitous/ybiq/commit/fb4ff115104e565e7cfa724ea3d39760c07f851f))

### Bug Fixes

- **deps:** bump @commitlint/cli from 12.1.4 to 13.1.0 ([#1016](https://github.com/ybiquitous/ybiq/issues/1016)) ([eb740d6](https://github.com/ybiquitous/ybiq/commit/eb740d6effe8e1418163ce7f2411c0f5f181d294))
- **deps:** bump @commitlint/config-conventional from 12.1.4 to 13.1.0 ([#1013](https://github.com/ybiquitous/ybiq/issues/1013)) ([cefd1ee](https://github.com/ybiquitous/ybiq/commit/cefd1eeda480f8897a23cfab6a8a345b0f9654de))

## [13.2.1](https://github.com/ybiquitous/ybiq/compare/v13.2.0...v13.2.1) (2021-07-19)

### Bug Fixes

- **deps:** bump wagoid/commitlint-github-action from 3 to 4 ([#1006](https://github.com/ybiquitous/ybiq/issues/1006)) ([739e5be](https://github.com/ybiquitous/ybiq/commit/739e5be8695d531d44b3f21c6ccb8d65c8790e4f))

## [13.2.0](https://github.com/ybiquitous/ybiq/compare/v13.1.0...v13.2.0) (2021-07-05)

### Features

- **deps:** bump husky from 6.0.0 to 7.0.0 ([#992](https://github.com/ybiquitous/ybiq/issues/992)) ([3076a00](https://github.com/ybiquitous/ybiq/commit/3076a00f8e9ae9984139a142180b33d3e62e57f4))
- **init:** add `lint:types:watch` script ([#990](https://github.com/ybiquitous/ybiq/issues/990)) ([4145bb6](https://github.com/ybiquitous/ybiq/commit/4145bb632e44b35d7519f96ef6a1e2010f56caf8))

## [13.1.0](https://github.com/ybiquitous/ybiq/compare/v13.0.0...v13.1.0) (2021-06-01)

### Features

- **eslint:** ignore `tmp/` by default ([#973](https://github.com/ybiquitous/ybiq/issues/973)) ([f5849e2](https://github.com/ybiquitous/ybiq/commit/f5849e2810bc193e3798b7827394df9e607a026a))

## [13.0.0](https://github.com/ybiquitous/ybiq/compare/v12.4.0...v13.0.0) (2021-05-17)

### ⚠ BREAKING CHANGES

- Node.js 12.20+ is required and CommonJS is unsupported

### Features

- remove `bin/` directory ([#948](https://github.com/ybiquitous/ybiq/issues/948)) ([07c542d](https://github.com/ybiquitous/ybiq/commit/07c542d78f022d8bfc0dd351291dad325ab88e58))
- support only ESM ([#950](https://github.com/ybiquitous/ybiq/issues/950)) ([f7271d6](https://github.com/ybiquitous/ybiq/commit/f7271d64eeb607d18331a0b061dd0ed8790a6f3c))

### Bug Fixes

- **actions:** remove invalid `workflow_dispatch.branches` ([#943](https://github.com/ybiquitous/ybiq/issues/943)) ([1dbc244](https://github.com/ybiquitous/ybiq/commit/1dbc244ac3f7cb8c073bd53764430b743dadbd96))
- **deps:** bump all outdated packages ([#960](https://github.com/ybiquitous/ybiq/issues/960)) ([0c1b1a6](https://github.com/ybiquitous/ybiq/commit/0c1b1a69e4d365186a5f7f2fbdb0989db9d0926a))
- **deps:** bump lint-staged from 10.5.4 to 11.0.0 ([#954](https://github.com/ybiquitous/ybiq/issues/954)) ([472f839](https://github.com/ybiquitous/ybiq/commit/472f83914f47eb74760057ccbc222b48c0ab01b9))
- **deps:** bump yargs from 16.2.0 to 17.0.1 ([#941](https://github.com/ybiquitous/ybiq/issues/941)) ([8302d7b](https://github.com/ybiquitous/ybiq/commit/8302d7baeef0a43df174b70558540b7eee8e907b))

## [12.4.0](https://github.com/ybiquitous/ybiq/compare/v12.3.0...v12.4.0) (2021-04-21)

### Features

- **actions:** support Node.js 16 ([#935](https://github.com/ybiquitous/ybiq/issues/935)) ([914dc9e](https://github.com/ybiquitous/ybiq/commit/914dc9e588f3abc852b06926c8d8faa012ed7935))

## [12.3.0](https://github.com/ybiquitous/ybiq/compare/v12.2.2...v12.3.0) (2021-04-16)

### Features

- **eslint:** add `ignorePatterns` ([#933](https://github.com/ybiquitous/ybiq/issues/933)) ([14f79f7](https://github.com/ybiquitous/ybiq/commit/14f79f77846fb01ec966e26c9e784b0baf822b65))

### Bug Fixes

- **actions:** wrap `cron` with quotes for clarity ([#932](https://github.com/ybiquitous/ybiq/issues/932)) ([1ee02f5](https://github.com/ybiquitous/ybiq/commit/1ee02f543f6f98ff6842997fc54ed0440a61f57c))

## [12.2.2](https://github.com/ybiquitous/ybiq/compare/v12.2.1...v12.2.2) (2021-04-05)

### Bug Fixes

- **deps:** bump ybiquitous/npm-audit-fix-action from v2 to v3 ([#925](https://github.com/ybiquitous/ybiq/issues/925)) ([3101c72](https://github.com/ybiquitous/ybiq/commit/3101c72e2bc3af8ccdbe155680be4c19f8583e97))

## [12.2.1](https://github.com/ybiquitous/ybiq/compare/v12.2.0...v12.2.1) (2021-04-05)

### Bug Fixes

- **actions:** replace `softprops/action-gh-release` with `gh release` ([#922](https://github.com/ybiquitous/ybiq/issues/922)) ([d81698f](https://github.com/ybiquitous/ybiq/commit/d81698f43c3d1bc2ac2b3e225c73ea1ad1f905e0))

## [12.2.0](https://github.com/ybiquitous/ybiq/compare/v12.1.0...v12.2.0) (2021-04-02)

### Features

- **remark:** use remark-preset-ybiquitous package ([#920](https://github.com/ybiquitous/ybiq/issues/920)) ([d509e5b](https://github.com/ybiquitous/ybiq/commit/d509e5bb350e10098cccc92c0323f58e877b5c48))

## [12.1.0](https://github.com/ybiquitous/ybiq/compare/v12.0.4...v12.1.0) (2021-04-02)

### Features

- **eslint:** enable reportUnusedDisableDirectives ([#914](https://github.com/ybiquitous/ybiq/issues/914)) ([f40e189](https://github.com/ybiquitous/ybiq/commit/f40e1892734e712751be72db18f48c389860965d))
- **init:** improve test:coverage script ([#915](https://github.com/ybiquitous/ybiq/issues/915)) ([cdfdad9](https://github.com/ybiquitous/ybiq/commit/cdfdad96a9073bb1a91a3dc2d312b8fba65b72da))

## [12.0.4](https://github.com/ybiquitous/ybiq/compare/v12.0.3...v12.0.4) (2021-04-01)

### Bug Fixes

- **actions:** use the latest npm for releasing ([#913](https://github.com/ybiquitous/ybiq/issues/913)) ([bbf440a](https://github.com/ybiquitous/ybiq/commit/bbf440a57af4f0e2ce843b68d640a3d25fab4aba))

## [12.0.3](https://github.com/ybiquitous/ybiq/compare/v12.0.2...v12.0.3) (2021-04-01)

### Bug Fixes

- **deps:** bump husky from 5.2.0 to 6.0.0 ([#909](https://github.com/ybiquitous/ybiq/issues/909)) ([45b1047](https://github.com/ybiquitous/ybiq/commit/45b104715c5a496681609488d201005de42feafc))

## [12.0.2](https://github.com/ybiquitous/ybiq/compare/v12.0.1...v12.0.2) (2021-03-10)

### Bug Fixes

- **actions:** use the latest npm for test ([#896](https://github.com/ybiquitous/ybiq/issues/896)) ([4d874e7](https://github.com/ybiquitous/ybiq/commit/4d874e75566a843d30135e4e8c6ec719f656fbf7))

## [12.0.1](https://github.com/ybiquitous/ybiq/compare/v12.0.0...v12.0.1) (2021-03-10)

### Bug Fixes

- **init:** support husky v5 migration ([#895](https://github.com/ybiquitous/ybiq/issues/895)) ([fecfa46](https://github.com/ybiquitous/ybiq/commit/fecfa46dd178579f1572e0258e4fb2370a73e553))

## [12.0.0](https://github.com/ybiquitous/ybiq/compare/v11.7.0...v12.0.0) (2021-03-10)

### ⚠ BREAKING CHANGES

- **deps:** husky v5 migration is performed

### Features

- **deps:** bump husky from 4.3.8 to 5.1.1 ([#869](https://github.com/ybiquitous/ybiq/issues/869)) ([b7eb5bb](https://github.com/ybiquitous/ybiq/commit/b7eb5bbd28a3e943f96fbff0a83874edddfca60e))

### Bug Fixes

- **deps:** bump wagoid/commitlint-github-action from v2 to v3 ([#872](https://github.com/ybiquitous/ybiq/issues/872)) ([c0f6741](https://github.com/ybiquitous/ybiq/commit/c0f674106aae36eb646abada17e478d6941c4f11))

### Reverts

- Revert "chore(release): 12.0.0" ([73f717d](https://github.com/ybiquitous/ybiq/commit/73f717db1c2ab787836de8dfadad64332cec242e))

## [11.7.0](https://github.com/ybiquitous/ybiq/compare/v11.6.2...v11.7.0) (2021-01-27)

### Features

- **deps:** require Node.js `>=12.13.0` ([#846](https://github.com/ybiquitous/ybiq/issues/846)) ([227d3ee](https://github.com/ybiquitous/ybiq/commit/227d3ee889eebf4a83ef40e57e612efbdcbaebc3))

## [11.6.2](https://github.com/ybiquitous/ybiq/compare/v11.6.1...v11.6.2) (2021-01-11)

### Bug Fixes

- **deps:** bump actions/setup-node from v2-beta to v2 ([#817](https://github.com/ybiquitous/ybiq/issues/817)) ([61fffc9](https://github.com/ybiquitous/ybiq/commit/61fffc9b4884677a3ba5e024a7ae199515da4b73))

## [11.6.1](https://github.com/ybiquitous/ybiq/compare/v11.6.0...v11.6.1) (2020-10-16)

### Bug Fixes

- **deps:** bump remark-cli from 8.0.1 to 9.0.0 ([#747](https://github.com/ybiquitous/ybiq/issues/747)) ([5f6d001](https://github.com/ybiquitous/ybiq/commit/5f6d00196ec868e4183535a1e3996426fadb728c))
- **deps:** bump remark-preset-lint-recommended from 4.0.1 to 5.0.0 ([#746](https://github.com/ybiquitous/ybiq/issues/746)) ([f1e854e](https://github.com/ybiquitous/ybiq/commit/f1e854e63732b13c3ca14d3e0dca640d53dd3d2e))

## [11.6.0](https://github.com/ybiquitous/ybiq/compare/v11.5.1...v11.6.0) (2020-10-06)

### Features

- **init:** npm publish on GitHub Actions ([#738](https://github.com/ybiquitous/ybiq/issues/738)) ([1da2987](https://github.com/ybiquitous/ybiq/commit/1da2987f07f1d24071b95190004e2d2a5d58f539)), closes [#732](https://github.com/ybiquitous/ybiq/issues/732)

## [11.5.1](https://github.com/ybiquitous/ybiq/compare/v11.5.0...v11.5.1) (2020-10-06)

### Bug Fixes

- **actions:** relax `actions/setup-node` version ([#731](https://github.com/ybiquitous/ybiq/issues/731)) ([924342d](https://github.com/ybiquitous/ybiq/commit/924342da721d81e34b3afd74aa14d29457f767c4))

## [11.5.0](https://github.com/ybiquitous/ybiq/compare/v11.4.4...v11.5.0) (2020-09-27)

### Features

- **init:** add `clean` and update `prerelease` ([#726](https://github.com/ybiquitous/ybiq/issues/726)) ([286a622](https://github.com/ybiquitous/ybiq/commit/286a62203bc2044665a27de10d3b6b2833a08d7b))

## [11.4.4](https://github.com/ybiquitous/ybiq/compare/v11.4.3...v11.4.4) (2020-09-15)

### Bug Fixes

- **deps:** bump @commitlint/config-conventional from 9.1.2 to 11.0.0 ([#706](https://github.com/ybiquitous/ybiq/issues/706)) ([c31ce18](https://github.com/ybiquitous/ybiq/commit/c31ce18f299b50d324bc0e824336b7dab262ad6f))
- **deps:** bump yargs from 15.4.1 to 16.0.3 ([#703](https://github.com/ybiquitous/ybiq/issues/703)) ([38a60fb](https://github.com/ybiquitous/ybiq/commit/38a60fb85f2697e7581ce3fe5e9f245dd65ffa8d))

## [11.4.3](https://github.com/ybiquitous/ybiq/compare/v11.4.2...v11.4.3) (2020-08-08)

### Bug Fixes

- **init:** remove needless `on.pull_request.tags` from `test.yml` ([#668](https://github.com/ybiquitous/ybiq/issues/668)) ([8b195dc](https://github.com/ybiquitous/ybiq/commit/8b195dc2e61782f00626b6da4c20ec531c2930ca))

## [11.4.2](https://github.com/ybiquitous/ybiq/compare/v11.4.1...v11.4.2) (2020-08-08)

### Bug Fixes

- **init:** rename `get_version` to `get_tag` ([#667](https://github.com/ybiquitous/ybiq/issues/667)) ([1eddc1c](https://github.com/ybiquitous/ybiq/commit/1eddc1c4b3d5dbdd92eb6c438c07fedeb7fbdcad))

## [11.4.1](https://github.com/ybiquitous/ybiq/compare/v11.4.0...v11.4.1) (2020-08-08)

### Bug Fixes

- **init:** improve GitHub Release body ([#665](https://github.com/ybiquitous/ybiq/issues/665)) ([d466176](https://github.com/ybiquitous/ybiq/commit/d46617665c74e60e61328b37b11444dd7eb5318e))

## [11.4.0](https://github.com/ybiquitous/ybiq/compare/v11.3.0...v11.4.0) (2020-08-08)

### Features

- **commitlint:** loosen `body-max-line-length` rule ([#649](https://github.com/ybiquitous/ybiq/issues/649)) ([eeb9b8d](https://github.com/ybiquitous/ybiq/commit/eeb9b8d90feae411944f0b8dff1420eba7d9a447))
- **commitlint:** loosen `body-max-line-length` rule again ([#650](https://github.com/ybiquitous/ybiq/issues/650)) ([4d9abd1](https://github.com/ybiquitous/ybiq/commit/4d9abd15556886ca140df1b5e84990f0c7c6f4cf)), closes [#649](https://github.com/ybiquitous/ybiq/issues/649)
- **init:** `lint` script includes `prettier:check` ([#661](https://github.com/ybiquitous/ybiq/issues/661)) ([bb2f205](https://github.com/ybiquitous/ybiq/commit/bb2f2053dd4a92c2b6fb0f24b5ff68a09a262f93))
- **init:** add `lint:types` script ([#654](https://github.com/ybiquitous/ybiq/issues/654)) ([0abf160](https://github.com/ybiquitous/ybiq/commit/0abf160548f990d5f30286ce8327f8ae3ea7e0f4))
- **init:** exclude snapshot files from Prettier ([#663](https://github.com/ybiquitous/ybiq/issues/663)) ([b873407](https://github.com/ybiquitous/ybiq/commit/b87340782beb9bcfca2a90e162d3fd2e43122da7))
- **init:** rename default branch: master -> main ([#664](https://github.com/ybiquitous/ybiq/issues/664)) ([d7b849a](https://github.com/ybiquitous/ybiq/commit/d7b849a57cdc687222d471b2157995a7423156e5))
- **init:** run `release:dry-run` on post-commit ([#662](https://github.com/ybiquitous/ybiq/issues/662)) ([e603390](https://github.com/ybiquitous/ybiq/commit/e6033902488337f6d999b84d9d8d8f3eba55ad1f))
- **init:** use yargs command module ([#655](https://github.com/ybiquitous/ybiq/issues/655)) ([152f75e](https://github.com/ybiquitous/ybiq/commit/152f75e7f4e95afbeeeae5aaed971d5d903b23d3))
- **types:** publish type declarations ([#656](https://github.com/ybiquitous/ybiq/issues/656)) ([84a281e](https://github.com/ybiquitous/ybiq/commit/84a281e77498b4f9d3688bdec70c54ccb475ab6f))

## [11.3.0](https://github.com/ybiquitous/ybiq/compare/v11.2.0...v11.3.0) (2020-07-14)

### Features

- **init:** create `.github/workflows/*.yml` ([#641](https://github.com/ybiquitous/ybiq/issues/641)) ([8719e54](https://github.com/ybiquitous/ybiq/commit/8719e54f3f43d9bb3f4348f3613028ce83b7f13b))

## [11.2.0](https://github.com/ybiquitous/ybiq/compare/v11.1.0...v11.2.0) (2020-07-14)

### Features

- **eslint:** simplify config since v7 ([#640](https://github.com/ybiquitous/ybiq/issues/640)) ([c22d7e3](https://github.com/ybiquitous/ybiq/commit/c22d7e368240f212e206e1032577f259b063bc3a))

## [11.1.0](https://github.com/ybiquitous/ybiq/compare/v11.0.0...v11.1.0) (2020-07-14)

### Features

- bump minimum node version (`engines.node`) ([#613](https://github.com/ybiquitous/ybiq/issues/613)) ([7e2e276](https://github.com/ybiquitous/ybiq/commit/7e2e276bd10ca70defdb02ccd183c4ecbe36f6b9))
- **deps:** bump @commitlint/cli from 8.3.5 to 9.0.1 ([#626](https://github.com/ybiquitous/ybiq/issues/626)) ([0a54463](https://github.com/ybiquitous/ybiq/commit/0a5446318a9579e1fbfe861524595e0a5f8a660e))
- **deps:** bump @commitlint/config-conventional from 8.3.4 to 9.0.1 ([#625](https://github.com/ybiquitous/ybiq/issues/625)) ([819043f](https://github.com/ybiquitous/ybiq/commit/819043f500f386f47ff71fa2417a7ae4b649cc37))
- **deps:** bump eslint to v7 ([#639](https://github.com/ybiquitous/ybiq/issues/639)) ([dfb7864](https://github.com/ybiquitous/ybiq/commit/dfb78647c5d20406fb2e19b5ff56da47a0be71de))

### Bug Fixes

- **deps:** bump standard-version from 7.1.0 to 8.0.0 ([#604](https://github.com/ybiquitous/ybiq/issues/604)) ([302aed6](https://github.com/ybiquitous/ybiq/commit/302aed66c8699e7933197ff48177b53c4ccc77ee))

## [11.0.0](https://github.com/ybiquitous/ybiq/compare/v10.0.0...v11.0.0) (2020-04-13)

### ⚠ BREAKING CHANGES

- **deps:** Prettier v2; change defaults and use `.` instead of `**.{ext1,ext2}`.

### Features

- **deps:** bump prettier from 1.19.1 to 2.0.4 ([#593](https://github.com/ybiquitous/ybiq/issues/593)) ([375a6ef](https://github.com/ybiquitous/ybiq/commit/375a6effc4479c622f0c7b6bde0ad55605fe297a))
- **deps:** bump remark-cli from 7.0.1 to 8.0.0 ([#584](https://github.com/ybiquitous/ybiq/issues/584)) ([9bae553](https://github.com/ybiquitous/ybiq/commit/9bae553c4545b35690ea46404c0c70ad832175a8))
- **deps:** bump remark-lint-no-heading-punctuation from 1.0.4 t… ([#582](https://github.com/ybiquitous/ybiq/issues/582)) ([c68732c](https://github.com/ybiquitous/ybiq/commit/c68732cf7aafe0f359c5218001b0f450af72bebe))
- **deps:** bump remark-preset-lint-recommended from 3.0.4 to 4.0.0 ([#583](https://github.com/ybiquitous/ybiq/issues/583)) ([dd56b10](https://github.com/ybiquitous/ybiq/commit/dd56b10040b7ffc73dc6a076809df1a3dd1e3529))
- **deps:** bump remark-validate-links from 9.2.0 to 10.0.0 ([#578](https://github.com/ybiquitous/ybiq/issues/578)) ([3462404](https://github.com/ybiquitous/ybiq/commit/3462404bb53290f1b630b012e3e5cc8e14b9d87f))

## [10.0.0](https://github.com/ybiquitous/ybiq/compare/v9.1.0...v10.0.0) (2020-01-22)

### ⚠ BREAKING CHANGES

- **commitlint:** drop support for Travis CI (#546)

### Features

- **commitlint:** drop support for Travis CI ([#546](https://github.com/ybiquitous/ybiq/issues/546)) ([7eb5412](https://github.com/ybiquitous/ybiq/commit/7eb541264aa46cb9632ff959fb1ee60a7e855211))
- **deps:** bump husky from 3.1.0 to 4.0.0 ([#531](https://github.com/ybiquitous/ybiq/issues/531)) ([7d609a7](https://github.com/ybiquitous/ybiq/commit/7d609a7fec4bcd341109f2ec30deb28300e5140d))
- **deps:** bump lint-staged from 9.5.0 to 10.0.1 ([#545](https://github.com/ybiquitous/ybiq/issues/545)) ([a0c9484](https://github.com/ybiquitous/ybiq/commit/a0c948408bccb72f13da1ae47d5b7db65d0f0589))

## [9.1.0](https://github.com/ybiquitous/ybiq/compare/v9.0.0...v9.1.0) (2019-09-13)

### Features

- **standard-version:** add `prerelease` hook ([#480](https://github.com/ybiquitous/ybiq/issues/480)) ([9258362](https://github.com/ybiquitous/ybiq/commit/9258362815faba40218abaf12fd91506fed800a6))

## [9.0.0](https://github.com/ybiquitous/ybiq/compare/v8.0.0...v9.0.0) (2019-09-09)

### ⚠ BREAKING CHANGES

- drop Node v8 and v9 support
- **deps:** `execa@2.0.2`, which `lint-staged@9` depends on, requires Node 8.12 at minimum
- **lint-staged:** the `lint-staged` field structure in `package.json` is changed

### Features

- **deps:** bump eslint from 5.16.0 to 6.3.0 ([#476](https://github.com/ybiquitous/ybiq/issues/476)) ([9806de7](https://github.com/ybiquitous/ybiq/commit/9806de758763f47d1ee8de3d978c9993e9fc9d6a))
- **deps:** bump husky from 2.7.0 to 3.0.0 ([#438](https://github.com/ybiquitous/ybiq/issues/438)) ([ff6c8bb](https://github.com/ybiquitous/ybiq/commit/ff6c8bb93c94b61412a89247396d178b8eff49aa))
- **deps:** bump lint-staged from 8.2.1 to 9.0.1 ([#439](https://github.com/ybiquitous/ybiq/issues/439)) ([3a0f7d0](https://github.com/ybiquitous/ybiq/commit/3a0f7d0e5a281ad95cabea6c47dbf0f833592611))
- **deps:** bump remark-cli from 6.0.1 to 7.0.0 ([#453](https://github.com/ybiquitous/ybiq/issues/453)) ([166391e](https://github.com/ybiquitous/ybiq/commit/166391e0f794903a09dbfe5ef2902441780fe707))
- **deps:** bump standard-version from 6.0.1 to 7.0.0 ([#456](https://github.com/ybiquitous/ybiq/issues/456)) ([bad2836](https://github.com/ybiquitous/ybiq/commit/bad2836497fe071e4ff4e6966a5fc40d62766dcd))
- **deps:** update `engines.node` to `>=8.12.0` ([#441](https://github.com/ybiquitous/ybiq/issues/441)), closes [sindresorhus/execa#319](https://github.com/sindresorhus/execa/issues/319)
- **lint-staged:** make settings more simple ([#440](https://github.com/ybiquitous/ybiq/issues/440)) ([9660b11](https://github.com/ybiquitous/ybiq/commit/9660b11f8ed156d55b83b10e19ad24a7cc306edf))
- **prettier:** support `*.mdx` files ([#433](https://github.com/ybiquitous/ybiq/issues/433)) ([712402f](https://github.com/ybiquitous/ybiq/commit/712402f942bed75c17f7bdf5047a1e1c2008c8ae))
- update minimum Node to v10 ([#473](https://github.com/ybiquitous/ybiq/issues/473)) ([6c03057](https://github.com/ybiquitous/ybiq/commit/6c03057ddb794784a4ea726445817312f7031c9b))

## [8.0.0](https://github.com/ybiquitous/ybiq/compare/v7.3.0...v8.0.0) (2019-06-24)

### ⚠ BREAKING CHANGES

- **remark:** please configure manually if you want to fix markdown files on pre-commit
- **remark:** please install it manually to keep same linting rules

### Features

- **deps:** bump standard-version from 5.0.2 to 6.0.1 ([#393](https://github.com/ybiquitous/ybiq/issues/393)) ([7aac359](https://github.com/ybiquitous/ybiq/commit/7aac359fc118d5ee06f87d3cd57788cb163b2c42))
- **eslint:** support TypeScript file extensions ([#427](https://github.com/ybiquitous/ybiq/issues/427)) ([5a2bb23](https://github.com/ybiquitous/ybiq/commit/5a2bb23677751fcced59490728ad21a39f9ec697))
- **remark:** remove `remark-lint-first-heading-level` package ([#423](https://github.com/ybiquitous/ybiq/issues/423)) ([ae09165](https://github.com/ybiquitous/ybiq/commit/ae09165298295e27da9ec99a670ea5efc58736c9))
- **remark:** remove `remark-lint-no-tabs` package ([#424](https://github.com/ybiquitous/ybiq/issues/424)) ([30e05ea](https://github.com/ybiquitous/ybiq/commit/30e05ea557626f5e3783e3c38df4f963d16de2d0))
- **remark:** remove `remark-preset-lint-markdown-style-guide` package ([#425](https://github.com/ybiquitous/ybiq/issues/425)) ([6630938](https://github.com/ybiquitous/ybiq/commit/66309384f8960264542bc3e92aa5dd9278a2451d))
- **remark:** stop auto-fix on pre-commit ([#428](https://github.com/ybiquitous/ybiq/issues/428)) ([48fbe47](https://github.com/ybiquitous/ybiq/commit/48fbe47231fe206eb8a9ccef8ed75ae110c2e859))

### Bug Fixes

- **remark:** missing linting on pre-commit ([#430](https://github.com/ybiquitous/ybiq/issues/430)) ([389aaa6](https://github.com/ybiquitous/ybiq/commit/389aaa6bf0edf985c28ac3703607180d6c1f94e7)), closes [#428](https://github.com/ybiquitous/ybiq/issues/428)
- **remark:** use official short plugin names ([#426](https://github.com/ybiquitous/ybiq/issues/426)) ([a387704](https://github.com/ybiquitous/ybiq/commit/a3877044924e8155f771d2a1060f32daeb01bf09))

## [7.3.0](https://github.com/ybiquitous/ybiq/compare/v7.2.2...v7.3.0) (2019-02-15)

### Features

- **deps:** bump standard-version from 4.4.0 to 5.0.0 ([#364](https://github.com/ybiquitous/ybiq/issues/364)) ([f125f0a](https://github.com/ybiquitous/ybiq/commit/f125f0a0655c854a484b7de882e09b87ba8addaf))

## [7.2.2](https://github.com/ybiquitous/ybiq/compare/v7.2.1...v7.2.2) (2019-02-02)

### Bug Fixes

- **remark:** disable rules conflicting with Prettier ([#349](https://github.com/ybiquitous/ybiq/issues/349)) ([1e45a84](https://github.com/ybiquitous/ybiq/commit/1e45a843468044c0dab2eaa667072ba0a0d27bcf))

## [7.2.1](https://github.com/ybiquitous/ybiq/compare/v7.2.0...v7.2.1) (2019-02-02)

### Bug Fixes

- **remark:** fix settings & scripts ([#346](https://github.com/ybiquitous/ybiq/issues/346)) ([f31a097](https://github.com/ybiquitous/ybiq/commit/f31a09728cc284fa8d1468419406e168233d649a))

## [7.2.0](https://github.com/ybiquitous/ybiq/compare/v7.1.0...v7.2.0) (2019-02-02)

### Features

- **prettier:** support TypeScript extensions ([#345](https://github.com/ybiquitous/ybiq/issues/345)) ([208a988](https://github.com/ybiquitous/ybiq/commit/208a9880fe5f5272cd1d2426b4c8cb4eb895a259))

### Bug Fixes

- **standard-version:** revert "simplify settings" ([#343](https://github.com/ybiquitous/ybiq/issues/343)) ([0356fc0](https://github.com/ybiquitous/ybiq/commit/0356fc0504641adddf00664f63c06409866ade15))

## [7.1.0](https://github.com/ybiquitous/ybiq/compare/v7.0.0...v7.1.0) (2019-02-01)

### Features

- **editorconfig:** increase `max_line_length` ([#335](https://github.com/ybiquitous/ybiq/issues/335)) ([df7e35f](https://github.com/ybiquitous/ybiq/commit/df7e35f7d89989c9658ec2ab48bb2a980215cc34))
- **prettier:** add settings to `package.json` ([#337](https://github.com/ybiquitous/ybiq/issues/337)) ([761c33e](https://github.com/ybiquitous/ybiq/commit/761c33e00020c23b2b1cfb6d2966d9aaa359492d))
- **remark:** add settings to `package.json` ([#336](https://github.com/ybiquitous/ybiq/issues/336)) ([a536e25](https://github.com/ybiquitous/ybiq/commit/a536e25484a9becd0ba40a7fc1358e51859a4ced))
- **standard-version:** simplify settings ([#334](https://github.com/ybiquitous/ybiq/issues/334)) ([bd0ff2b](https://github.com/ybiquitous/ybiq/commit/bd0ff2b9e5b18a47908a05ce46cbd4e79840ad5c))

## [7.0.0](https://github.com/ybiquitous/ybiq/compare/v6.0.0...v7.0.0) (2019-01-31)

### ⚠ BREAKING CHANGES

- **remark:** `markdownlint` is unsupported no longer. It may fail linting your Markdown files.
- **init:** drop support Node 8.4- by using `fs.copyFile()`

http://nodejs.org/api/fs.html#fs_fs_copyfile_src_dest_flags_callback

### Features

- **init:** drop `fs-extra` from runtime dependencies ([#285](https://github.com/ybiquitous/ybiq/issues/285)) ([2de76eb](https://github.com/ybiquitous/ybiq/commit/2de76eb8eac86c76eecfe033bb6c943b022c4b24))
- **prettier:** add npm scripts ([#321](https://github.com/ybiquitous/ybiq/issues/321)) ([3380443](https://github.com/ybiquitous/ybiq/commit/338044333bbe8f5441a95b26f6405d7313260942))
- **remark:** migrate from `markdownlint` to `remark-lint` ([#326](https://github.com/ybiquitous/ybiq/issues/326)) ([d629afd](https://github.com/ybiquitous/ybiq/commit/d629afd081df5269e15d0c46d5446eb81cd1071c))

### Bug Fixes

- **deps:** update `nodemon` for `event-stream` vulnerability ([#296](https://github.com/ybiquitous/ybiq/issues/296)) ([80b2a11](https://github.com/ybiquitous/ybiq/commit/80b2a116a9fa68420035987b29efb02c485cc134))
- **standard-version:** add `--no-verify` option ([#330](https://github.com/ybiquitous/ybiq/issues/330)) ([b9ecf57](https://github.com/ybiquitous/ybiq/commit/b9ecf57c4412c27acfde9e58715dcfeac0b71942))

## [6.0.0](https://github.com/ybiquitous/ybiq/compare/v5.0.1...v6.0.0) (2018-11-18)

### ⚠ BREAKING CHANGES

- **eslint:** remove `.eslintrc.js` file
- **commitlint:** remove `.commitlintrc.js` file
- **prettier:** remove `.prettierignore` file
- **prettier:** `lint:md:fix` was replaced with `prettier:write`

### Features

- add `npm run format` script ([#279](https://github.com/ybiquitous/ybiq/issues/279)) ([293fbae](https://github.com/ybiquitous/ybiq/commit/293fbae746b4fadecdd9a391d4d67127c8ac6498))
- **commitlint:** move `.commitlintrc.js` to `package.json` ([#277](https://github.com/ybiquitous/ybiq/issues/277)) ([0884342](https://github.com/ybiquitous/ybiq/commit/0884342cedc19d621a6b299f71a17e71f87f1a55))
- **eslint:** move `.eslintrc.js` to `package.json` ([#278](https://github.com/ybiquitous/ybiq/issues/278)) ([5077193](https://github.com/ybiquitous/ybiq/commit/5077193bcec9180af5a1c3b9fa7c4a029e4ed6c3))
- **prettier:** extend Prettier target files ([#273](https://github.com/ybiquitous/ybiq/issues/273)) ([a89ba5d](https://github.com/ybiquitous/ybiq/commit/a89ba5dee7ece0826421b39988f998d99d63ff3a))
- **prettier:** format CHANGELOG.md ([#274](https://github.com/ybiquitous/ybiq/issues/274)) ([be9a697](https://github.com/ybiquitous/ybiq/commit/be9a697b380d9f998605df02b29de8297dfea1a3))

### Bug Fixes

- **deps:** update `husky` from 1.1.3 to 1.1.4 ([#281](https://github.com/ybiquitous/ybiq/issues/281)) ([3f7447a](https://github.com/ybiquitous/ybiq/commit/3f7447a39386ef0edae1b8c3907b380453369996))
- **deps:** update `lint-staged` from 8.0.4 to 8.0.5 ([#282](https://github.com/ybiquitous/ybiq/issues/282)) ([fe3728f](https://github.com/ybiquitous/ybiq/commit/fe3728f472b7c352e14176f44a32269bc378e3d5))
- **deps:** update `yargs` from 12.0.2 to 12.0.4 ([#280](https://github.com/ybiquitous/ybiq/issues/280)) ([3de4120](https://github.com/ybiquitous/ybiq/commit/3de41202ea5452bc6d8f78fe5a6d32739ef977ad))
- **deps:** update all `dependencies` ([#283](https://github.com/ybiquitous/ybiq/issues/283)) ([60c6703](https://github.com/ybiquitous/ybiq/commit/60c67036c48f475439ae3148eb6409c21dd96b1c))

## [5.0.1](https://github.com/ybiquitous/ybiq/compare/v5.0.0...v5.0.1) (2018-11-07)

### Bug Fixes

- **deps:** update dependency lint-staged to v8 ([#262](https://github.com/ybiquitous/ybiq/issues/262)) ([ea6af96](https://github.com/ybiquitous/ybiq/commit/ea6af966f9824245a773f653e5c27cf3ac3c7a45))

## [5.0.0](https://github.com/ybiquitous/ybiq/compare/v4.1.0...v5.0.0) (2018-09-26)

### ⚠ BREAKING CHANGES

- **deps:** update husky scripts because husky@1.0.0 has breaking changes

### Features

- **deps:** update dependency husky to v1 ([#253](https://github.com/ybiquitous/ybiq/issues/253)) ([d53ef7c](https://github.com/ybiquitous/ybiq/commit/d53ef7c9fb34be1d57cfbacd2673b2dcd099000d))

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.13.0 ([#243](https://github.com/ybiquitous/ybiq/issues/243)) ([15b879b](https://github.com/ybiquitous/ybiq/commit/15b879b0d847f96b25587c9562cb569b7cc3e8d3))

## [4.1.0](https://github.com/ybiquitous/ybiq/compare/v4.0.0...v4.1.0) (2018-08-11)

### Features

- **markdownlint:** remove "MD030" rule and enable default option ([#238](https://github.com/ybiquitous/ybiq/issues/238)) ([c4ac79c](https://github.com/ybiquitous/ybiq/commit/c4ac79cfe126980574b3699536635950894e92dc))
- **prettier:** add JSON support ([#240](https://github.com/ybiquitous/ybiq/issues/240)) ([c5eb5fa](https://github.com/ybiquitous/ybiq/commit/c5eb5fa0d88bf957733a7aee286a69255e72f4a0))
- **prettier:** add YAML support ([#239](https://github.com/ybiquitous/ybiq/issues/239)) ([461f7d1](https://github.com/ybiquitous/ybiq/commit/461f7d12899db61e3fd4bef39ae66ed412d9ec0f))

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.12.0 ([#232](https://github.com/ybiquitous/ybiq/issues/232)) ([1f3bd43](https://github.com/ybiquitous/ybiq/commit/1f3bd43af461f1d5ea61660a0cd8f1edc44733af))

## [4.0.0](https://github.com/ybiquitous/ybiq/compare/v3.4.0...v4.0.0) (2018-07-17)

### ⚠ BREAKING CHANGES

- **eslint:** remove dependency on `eslint-config-ybiquitous` from `optionalDependencies`

### Features

- **eslint:** remove dependency on `eslint-config-ybiquitous` ([#228](https://github.com/ybiquitous/ybiq/issues/228)) ([ea04df3](https://github.com/ybiquitous/ybiq/commit/ea04df376da04e57c62805e7da81448b2419bacf))

### Bug Fixes

- **deps:** update dependency fs-extra to v7 ([#227](https://github.com/ybiquitous/ybiq/issues/227)) ([cf738d9](https://github.com/ybiquitous/ybiq/commit/cf738d9e7f4072da09ae36ec8345686ef7ad10c3))

## [3.4.0](https://github.com/ybiquitous/ybiq/compare/v3.3.3-0...v3.4.0) (2018-07-17)

### Features

- **standard-version:** add `--sign` option ([#226](https://github.com/ybiquitous/ybiq/issues/226)) ([42c4633](https://github.com/ybiquitous/ybiq/commit/42c46338bae97957f72ef2927e001db65ea0fdbf))

## [3.3.3-0](https://github.com/ybiquitous/ybiq/compare/v3.3.2...v3.3.3-0) (2018-07-13)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.11.0 ([#223](https://github.com/ybiquitous/ybiq/issues/223)) ([a8d8a8d](https://github.com/ybiquitous/ybiq/commit/a8d8a8d3383d855cafe51619ae80b3ebb0d96965))

## [3.3.2](https://github.com/ybiquitous/ybiq/compare/v3.3.1...v3.3.2) (2018-07-09)

### Bug Fixes

- **travis:** deploy failed caused by excluding builds on tags ([5e8a8e8](https://github.com/ybiquitous/ybiq/commit/5e8a8e840122fcede5ca8331e0e82272ec387742))

## [3.3.1](https://github.com/ybiquitous/ybiq/compare/v3.3.0...v3.3.1) (2018-07-09)

### Bug Fixes

- **init:** trim `--print-name` option from `npm-run-all` ([#218](https://github.com/ybiquitous/ybiq/issues/218)) ([2ceeb86](https://github.com/ybiquitous/ybiq/commit/2ceeb86fee1a2fddca3db294f7cce2487e21e725))

## [3.3.0](https://github.com/ybiquitous/ybiq/compare/v3.2.0...v3.3.0) (2018-06-26)

### Features

- **deps:** bump eslint from 4.19.1 to 5.0.1 ([544aeb6](https://github.com/ybiquitous/ybiq/commit/544aeb6072114daadaace338b6387985fe94b874))
- **deps:** update dependency eslint-config-ybiquitous to v5 ([46e8086](https://github.com/ybiquitous/ybiq/commit/46e808640a56ec9a5546732efc15629b1a806a36))

### Bug Fixes

- **deps:** update dependency yargs to v12 ([cb6a1a1](https://github.com/ybiquitous/ybiq/commit/cb6a1a161b52c068c73c9edaf0eee82ee29424c1))
- **eslint:** update settings and fix source code ([a236089](https://github.com/ybiquitous/ybiq/commit/a23608963f403bd64c89e60de57be05afafa66d3))

## [3.2.0](https://github.com/ybiquitous/ybiq/compare/v3.1.1...v3.2.0) (2018-06-17)

### Features

- **init:** add new options (`cwd`, `logger`) to `init()` ([#203](https://github.com/ybiquitous/ybiq/issues/203)) ([7d8b30a](https://github.com/ybiquitous/ybiq/commit/7d8b30a9bb3b4864425e61f9fc7afa810c7e0260))

### Bug Fixes

- **init:** missing `.markdownlint.json` on published package ([#204](https://github.com/ybiquitous/ybiq/issues/204)) ([54afaeb](https://github.com/ybiquitous/ybiq/commit/54afaebf208171a9a0b4056484dcb3b09b82693a))

## [3.1.1](https://github.com/ybiquitous/ybiq/compare/v3.1.0...v3.1.1) (2018-06-16)

### Bug Fixes

- **markdownlint:** disable `MD030` rule conflicting with Prettier ([#202](https://github.com/ybiquitous/ybiq/issues/202)) ([7878c5e](https://github.com/ybiquitous/ybiq/commit/7878c5e1afc5fdc0c6948518e032b281b1ea678c))

## [3.1.0](https://github.com/ybiquitous/ybiq/compare/v3.0.2...v3.1.0) (2018-06-16)

### Features

- **eslint:** make `eslint-config-ybiquitous` optional ([#194](https://github.com/ybiquitous/ybiq/issues/194)) ([7c0eb9b](https://github.com/ybiquitous/ybiq/commit/7c0eb9bd10e6f070d78aa7439c1438bcc5495923))
- **init:** improve `lint-staged` settings via `ignore` option ([#196](https://github.com/ybiquitous/ybiq/issues/196)) ([8fe523c](https://github.com/ybiquitous/ybiq/commit/8fe523ccdf0ef6874d9c36e5a2212c4bf112bf1e))
- **init:** remove `standard-version` custom settings ([#191](https://github.com/ybiquitous/ybiq/issues/191)) ([d49de38](https://github.com/ybiquitous/ybiq/commit/d49de388b6c984c5862b89a47c29e4858e9051b6))
- **prettier:** add Markdown support ([#197](https://github.com/ybiquitous/ybiq/issues/197)) ([38d0d9c](https://github.com/ybiquitous/ybiq/commit/38d0d9cb9774b72b649cef338db5776fe085dd35))

### Bug Fixes

- **commitlint:** correct `GIT_PARAMS` argument ([#192](https://github.com/ybiquitous/ybiq/issues/192)) ([373f549](https://github.com/ybiquitous/ybiq/commit/373f549bf306b8218978fa2cf44d707e58c1c23f))

## [3.0.2](https://github.com/ybiquitous/ybiq/compare/v3.0.1...v3.0.2) (2018-06-16)

## [3.0.1](https://github.com/ybiquitous/ybiq/compare/v3.0.0...v3.0.1) (2018-06-08)

## [3.0.0](https://github.com/ybiquitous/ybiq/compare/v2.0.0...v3.0.0) (2018-06-08)

### ⚠ BREAKING CHANGES

- Stop supporting Node 6.x which is maintenance LTS.

### Features

- drop Node 6 support ([#169](https://github.com/ybiquitous/ybiq/issues/169)) ([4d5364e](https://github.com/ybiquitous/ybiq/commit/4d5364eed5373db2360017223f3a95de96875bf5))

### Bug Fixes

- **deps:** update commitlint monorepo to v7 ([#181](https://github.com/ybiquitous/ybiq/issues/181)) ([3846081](https://github.com/ybiquitous/ybiq/commit/3846081ac06586c79c59ec2102652d236e7d97e3))
- **deps:** update dependency fs-extra to v6 ([#157](https://github.com/ybiquitous/ybiq/issues/157)) ([702c498](https://github.com/ybiquitous/ybiq/commit/702c498c774e00f6b9359d421dd4b90dfadc0939))
- **deps:** update dependency markdownlint-cli to ^0.10.0 ([#177](https://github.com/ybiquitous/ybiq/issues/177)) ([54f2cde](https://github.com/ybiquitous/ybiq/commit/54f2cde71340b88bdce420ebd6515d3e0c01b578))
- **deps:** update dependency markdownlint-cli to ^0.9.0 ([#171](https://github.com/ybiquitous/ybiq/issues/171)) ([76be9dd](https://github.com/ybiquitous/ybiq/commit/76be9dd9af46aa898ef7a6dacf8df50c987323dc))

## [2.0.0](https://github.com/ybiquitous/ybiq/compare/v1.4.1...v2.0.0) (2018-03-23)

### ⚠ BREAKING CHANGES

- **init:** same as other `*rc.js` files

### Features

- **init:** migrate from `.commitlintrc.js` to `commitlint.config.js` ([#125](https://github.com/ybiquitous/ybiq/issues/125)) ([d8fc94e](https://github.com/ybiquitous/ybiq/commit/d8fc94ec8f642dc799a20ed65299489e772e4055))

### Bug Fixes

- **commitlint:** rename config file to `.commitlintrc.js` ([#123](https://github.com/ybiquitous/ybiq/issues/123)) ([8a4aef1](https://github.com/ybiquitous/ybiq/commit/8a4aef162d211e1c0fa32e3966496d2a751211c1))
- **deps:** update dependency lint-staged to ^7.0.0 ([#127](https://github.com/ybiquitous/ybiq/issues/127)) ([687c85d](https://github.com/ybiquitous/ybiq/commit/687c85d0a0f52d57ec461690b17557b7102b61d8))
- **deps:** update dependency markdownlint-cli to ^0.8.0 ([#142](https://github.com/ybiquitous/ybiq/issues/142)) ([6043a26](https://github.com/ybiquitous/ybiq/commit/6043a269c166eff633e180ecf5d51b9d942acf60))
- **init:** use `templates/` directory ([#126](https://github.com/ybiquitous/ybiq/issues/126)) ([7e55ab5](https://github.com/ybiquitous/ybiq/commit/7e55ab549c64e7153f1e9e7efb11ef1480ac1950))

## [1.4.1](https://github.com/ybiquitous/ybiq/compare/v1.4.0...v1.4.1) (2018-02-08)

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.7.1 ([#113](https://github.com/ybiquitous/ybiq/issues/113)) ([85566e6](https://github.com/ybiquitous/ybiq/commit/85566e6c35f8f2b4c702ebb5d81e1b81ef18626f))
- **markdownlint:** ignore CHANGELOG on pre-commit ([#115](https://github.com/ybiquitous/ybiq/issues/115)) ([0b27b2e](https://github.com/ybiquitous/ybiq/commit/0b27b2eeb34d0198d4ee7f0ff0660880720a2551))
- **markdownlint:** stop writing CHANGELOG.md before release ([#111](https://github.com/ybiquitous/ybiq/issues/111)) ([1baf050](https://github.com/ybiquitous/ybiq/commit/1baf050ba176ef3071c336b26ce3b161315d2101))

## [1.4.0](https://github.com/ybiquitous/ybiq/compare/v1.3.0...v1.4.0) (2018-02-05)

### Features

- **markdownlint:** lint files recursively ([#109](https://github.com/ybiquitous/ybiq/issues/109)) ([20a7a1c](https://github.com/ybiquitous/ybiq/commit/20a7a1c0f507cb2bf8652d9648769e0b8dd911cb))

### Bug Fixes

- **deps:** update dependency markdownlint-cli to ^0.7.0 ([#108](https://github.com/ybiquitous/ybiq/issues/108)) ([0b8a1fe](https://github.com/ybiquitous/ybiq/commit/0b8a1fe3e82b6851dca76b5bab7f34ee093ffba6))
- **deps:** update dependency yargs to ^11.0.0 ([#104](https://github.com/ybiquitous/ybiq/issues/104)) ([2aeea90](https://github.com/ybiquitous/ybiq/commit/2aeea908011ed8f06655d572ad0a85ac63863270))

## [1.3.0](https://github.com/ybiquitous/ybiq/compare/v1.2.0...v1.3.0) (2018-01-19)

### Features

- **package:** update `[@commitlint](https://github.com/commitlint)` packages to 6.0.2 ([#92](https://github.com/ybiquitous/ybiq/issues/92)) ([b5457e5](https://github.com/ybiquitous/ybiq/commit/b5457e5b2dca5b06897c2b6696aff9bdfedae732))
- **package:** update to Babel 7 (beta) ([#96](https://github.com/ybiquitous/ybiq/issues/96)) ([7a99aa1](https://github.com/ybiquitous/ybiq/commit/7a99aa1d3b943925d8fc9f26e121054420a1fb3f))

## [1.2.0](https://github.com/ybiquitous/ybiq/compare/v1.1.0...v1.2.0) (2018-01-07)

### Features

- **commitlint:** add `@commitlint/travis-cli` ([#88](https://github.com/ybiquitous/ybiq/issues/88)) ([019cd3c](https://github.com/ybiquitous/ybiq/commit/019cd3c7f9d4c215a96d222d2f47b0e9a3f42c08))
- **commitlint:** add `$GIT_PARAMS` to `commitlint` command ([#78](https://github.com/ybiquitous/ybiq/issues/78)) ([d00784b](https://github.com/ybiquitous/ybiq/commit/d00784b4ef352fd41181395fd4cdf41e56047bdf))
- **package:** update `eslint-config-ybiquitous` to version 4.2.1 ([#83](https://github.com/ybiquitous/ybiq/issues/83)) ([059a7e1](https://github.com/ybiquitous/ybiq/commit/059a7e1933ab4a21324e0218b5087f5a83c5a3e3))

### Bug Fixes

- **release:** `release:dry-run` script use `npm run` for DRY ([#79](https://github.com/ybiquitous/ybiq/issues/79)) ([a9546b9](https://github.com/ybiquitous/ybiq/commit/a9546b93c40648a73f317d73d7322b8ac3102121))

## [1.1.0](https://github.com/ybiquitous/ybiq/compare/v1.0.1...v1.1.0) (2017-12-18)

### Features

- **editorconfig:** add `max_line_length` ([#65](https://github.com/ybiquitous/ybiq/issues/65)) ([756d7e3](https://github.com/ybiquitous/ybiq/commit/756d7e36fec1a9ca3e70464c32d6bf0ff21a6861))
- **editorconfig:** disable `trim_trailing_spaces` on markdown files ([#67](https://github.com/ybiquitous/ybiq/issues/67)) ([a0bb6f4](https://github.com/ybiquitous/ybiq/commit/a0bb6f425b0c29ff0c623283e49c220e9c55816e))
- **eslint:** add extension `.mjs` for ES modules ([#64](https://github.com/ybiquitous/ybiq/issues/64)) ([2cd62a2](https://github.com/ybiquitous/ybiq/commit/2cd62a2a0b14826d6f5b5c96e89bba8b47ceb07f))
- **package:** update `prettier` to version 1.9.1 ([#72](https://github.com/ybiquitous/ybiq/issues/72)) ([14df958](https://github.com/ybiquitous/ybiq/commit/14df958a92e8b3e34d8d7e10129bc9999fa5dcce))

## [1.0.1](https://github.com/ybiquitous/ybiq/compare/v1.0.0...v1.0.1) (2017-12-05)

### Bug Fixes

- **commitlint:** invalid config name (`config-angular`) ([#63](https://github.com/ybiquitous/ybiq/issues/63)) ([dc8b1a5](https://github.com/ybiquitous/ybiq/commit/dc8b1a57d31a3a15109fd7d963971122e77d015e))

## [1.0.0](https://github.com/ybiquitous/ybiq/compare/v0.6.0...v1.0.0) (2017-12-05)

### ⚠ BREAKING CHANGES

- **package:** Angular's commit convention has removed the `chore` type. For details, see below links:

* https://github.com/marionebl/commitlint/releases/tag/v5.0.0
* https://github.com/angular/angular/blob/master/CONTRIBUTING.md

Also add `browserslist` settings to fix lint error.

### Features

- **package:** update commitlint to version 5.0.1 ([#55](https://github.com/ybiquitous/ybiq/issues/55)) ([df150b5](https://github.com/ybiquitous/ybiq/commit/df150b558b02787a0707b14cfdd3d2af80bd1e09))
- **package:** update eslint to version 4.12.1 ([#57](https://github.com/ybiquitous/ybiq/issues/57)) ([3fa0a4e](https://github.com/ybiquitous/ybiq/commit/3fa0a4e7986f8e189bca16b04d10986ed9984107))
- **package:** update eslint-config-ybiquitous to version 4.0.0 ([#61](https://github.com/ybiquitous/ybiq/issues/61)) ([49bcd40](https://github.com/ybiquitous/ybiq/commit/49bcd404d4687071be8ca7c3928a01ce35b07be1))
- **package:** update lint-staged to version 6.0.0 ([#56](https://github.com/ybiquitous/ybiq/issues/56)) ([17c8c52](https://github.com/ybiquitous/ybiq/commit/17c8c525c8a48461af1f6582615a26ff0d46451e))

### Bug Fixes

- **commitlint:** avoid Angular's new commit convention ([#58](https://github.com/ybiquitous/ybiq/issues/58)) ([97c1f41](https://github.com/ybiquitous/ybiq/commit/97c1f417084a8ee609e5aa1cd513d61c08ab8784))
- **eslint:** simplify `eslint` command options ([#60](https://github.com/ybiquitous/ybiq/issues/60)) ([ef5ec08](https://github.com/ybiquitous/ybiq/commit/ef5ec08420b61624fd24f91d19f162cd52d1b49a))
- **release:** change commit message format to avoid CommitLint error ([#62](https://github.com/ybiquitous/ybiq/issues/62)) ([5303210](https://github.com/ybiquitous/ybiq/commit/530321067dcc12b8f3584f1516dd657e6f7e9154))

### Reverts

- Revert "chore(release): change default commit message on release" ([5b812a4](https://github.com/ybiquitous/ybiq/commit/5b812a40f609b759234891ac19e99d8b68a99f34))

## [0.6.0](https://github.com/ybiquitous/ybiq/compare/v0.5.0...v0.6.0) (2017-11-16)

### Features

- **package:** update lint-staged to version 5.0.0 ([#54](https://github.com/ybiquitous/ybiq/issues/54)) ([4fd9e3e](https://github.com/ybiquitous/ybiq/commit/4fd9e3e5b1ec0a30870350f4a7d262206267937f))

### Bug Fixes

- show help when unknown command is given ([#52](https://github.com/ybiquitous/ybiq/issues/52)) ([5881bbd](https://github.com/ybiquitous/ybiq/commit/5881bbd9985f477c4e0430db894c2346d3fbdce2))

## [0.5.0](https://github.com/ybiquitous/ybiq/compare/v0.4.6...v0.5.0) (2017-10-24)

### Features

- **package:** update yargs to version 10.0.3 ([#43](https://github.com/ybiquitous/ybiq/issues/43)) ([e514983](https://github.com/ybiquitous/ybiq/commit/e5149832744fa43459ab08b448beeaef97eb6de3))

## [0.4.6](https://github.com/ybiquitous/ybiq/compare/v0.4.5...v0.4.6) (2017-10-20)

### Bug Fixes

- **init:** missing `scripts` field in `package.json` ([#39](https://github.com/ybiquitous/ybiq/issues/39)) ([bf3e0cb](https://github.com/ybiquitous/ybiq/commit/bf3e0cbcb5d372e80c7b26c6fd3db8f54c118e65))
- **init:** output details and exit error code if unexpected error ([#40](https://github.com/ybiquitous/ybiq/issues/40)) ([1f8a042](https://github.com/ybiquitous/ybiq/commit/1f8a0421cbd43644b5b6dde98e2eb7cf0262015d))

## [0.4.5](https://github.com/ybiquitous/ybiq/compare/v0.4.4...v0.4.5) (2017-10-19)

## [0.4.4](https://github.com/ybiquitous/ybiq/compare/v0.4.3...v0.4.4) (2017-10-10)

### Bug Fixes

- **init:** add `standard-version` entry to `package.json` ([#32](https://github.com/ybiquitous/ybiq/issues/32)) ([17a9dc2](https://github.com/ybiquitous/ybiq/commit/17a9dc209c344dd7434e621329fba0b15c6a8490))

## [0.4.3](https://github.com/ybiquitous/ybiq/compare/v0.4.2...v0.4.3) (2017-10-10)

### Bug Fixes

- **init:** `yarn lint` outputs more info ([#31](https://github.com/ybiquitous/ybiq/issues/31)) ([79644cf](https://github.com/ybiquitous/ybiq/commit/79644cfad6e4c9fcd07e34a685a37a0b301c7bc0))

## [0.4.2](https://github.com/ybiquitous/ybiq/compare/v0.4.1...v0.4.2) (2017-10-10)

### Bug Fixes

- add missing `-h` (help) and `-v` (version) aliases ([#30](https://github.com/ybiquitous/ybiq/issues/30)) ([74a70be](https://github.com/ybiquitous/ybiq/commit/74a70be6e47c084ed4b52487adadd6b9e816c89b))

## [0.4.1](https://github.com/ybiquitous/ybiq/compare/v0.4.0...v0.4.1) (2017-10-10)

### Bug Fixes

- **init:** no update `lint:js` command ([#29](https://github.com/ybiquitous/ybiq/issues/29)) ([6f0acc9](https://github.com/ybiquitous/ybiq/commit/6f0acc93a5563eefd1b7dc4424750835e2620038))

## [0.4.0](https://github.com/ybiquitous/ybiq/compare/v0.3.1...v0.4.0) (2017-10-10)

### Features

- **api:** support programmatic API ([#21](https://github.com/ybiquitous/ybiq/issues/21)) ([9c22a80](https://github.com/ybiquitous/ybiq/commit/9c22a802dbea582d14e9fa77d35b541382eb7b33))
- **init:** add more details to `init` command help ([#27](https://github.com/ybiquitous/ybiq/issues/27)) ([b3c1270](https://github.com/ybiquitous/ybiq/commit/b3c1270edf0a4380e632cb1fc9aafc915deccc69))

### Bug Fixes

- **init:** make \*.jsx files ESLint's target ([#28](https://github.com/ybiquitous/ybiq/issues/28)) ([8a6899f](https://github.com/ybiquitous/ybiq/commit/8a6899f2e14999ca517105f9f645f173d7606189))

## [0.3.1](https://github.com/ybiquitous/ybiq/compare/v0.3.0...v0.3.1) (2017-09-25)

### Bug Fixes

- **init:** add missing files to be published ([#18](https://github.com/ybiquitous/ybiq/issues/18)) ([4d8d108](https://github.com/ybiquitous/ybiq/commit/4d8d108f2b2c27c33c93e1f665df179644d9c7cc))

## [0.3.0](https://github.com/ybiquitous/ybiq/compare/v0.2.0...v0.3.0) (2017-09-25)

### Features

- **init:** write `commitlint.config.js` ([#15](https://github.com/ybiquitous/ybiq/issues/15)) ([a1266b8](https://github.com/ybiquitous/ybiq/commit/a1266b8d1e1fa57e78e477af226b295423977fbc))
- support Node 6 ([#9](https://github.com/ybiquitous/ybiq/issues/9)) ([0085d90](https://github.com/ybiquitous/ybiq/commit/0085d901ed5ecd841302c09043aa43134d620561))
- use wildcard(\*) for 'npm run lint' ([1e74176](https://github.com/ybiquitous/ybiq/commit/1e74176ecb1f8d6cd0f57a294d0c8b008ccedd7c))

### Performance Improvements

- prefer not babel code in Node 8+ ([#13](https://github.com/ybiquitous/ybiq/issues/13)) ([cb62636](https://github.com/ybiquitous/ybiq/commit/cb62636f549740658493c77eaa4ec47e64f05196))

## [0.2.0](https://github.com/ybiquitous/ybiq/compare/v0.1.0...v0.2.0) (2017-09-24)

### Features

- add '--version' CLI option ([8170627](https://github.com/ybiquitous/ybiq/commit/81706278758c42bce58668d0204facf12af3454b))

## [0.1.0](https://github.com/ybiquitous/ybiq/compare/8b6a1501a1eb5d584ab82a775186f2183572432a...v0.1.0) (2017-09-24)

### Features

- add `npm run lint` via `npm-run-all` ([c1ceaff](https://github.com/ybiquitous/ybiq/commit/c1ceaffecf9ff1adadf84959d0e62f2994f51bef))
- add markdownlint ([edfda2e](https://github.com/ybiquitous/ybiq/commit/edfda2eb67610845d9acc4e4cce1b8347bde1d6d))
- auto fix `test:watch` script ([d37ba2a](https://github.com/ybiquitous/ybiq/commit/d37ba2add9ca9616bbd3991121d364472cff8b2c))
- copy `.editorconfig` file on `init` command ([#2](https://github.com/ybiquitous/ybiq/issues/2)) ([81d6870](https://github.com/ybiquitous/ybiq/commit/81d68709a2f284ca83fcead73980853c4361ed5f))
- implement command-line script ([8b6a150](https://github.com/ybiquitous/ybiq/commit/8b6a1501a1eb5d584ab82a775186f2183572432a))
- rename project to `ybiq` ([#3](https://github.com/ybiquitous/ybiq/issues/3)) ([72a99ec](https://github.com/ybiquitous/ybiq/commit/72a99ec8ea14e2c770d45aa599358acc6fbba6d4))
- write `.eslintrc.js` on `init` command ([497b50b](https://github.com/ybiquitous/ybiq/commit/497b50ba8f827eb3bd5cee22b8d690fc1f5dc67b))

### Bug Fixes

- call `init()` explicitly ([9ad8954](https://github.com/ybiquitous/ybiq/commit/9ad8954f96b25313f128ca4f02a5779be8c2f030))
- output success message ([01b1dae](https://github.com/ybiquitous/ybiq/commit/01b1dae9a1505afc330d92cffd34b51dc2dceb77))
