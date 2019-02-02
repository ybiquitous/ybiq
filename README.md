# ybiq

[![npm](https://img.shields.io/npm/v/ybiq.svg)](https://www.npmjs.com/package/ybiq)
[![node](https://img.shields.io/node/v/ybiq.svg)](https://github.com/ybiquitous/ybiq)
[![Build Status](https://travis-ci.org/ybiquitous/ybiq.svg?branch=master)](https://travis-ci.org/ybiquitous/ybiq)
[![MIT License](https://img.shields.io/github/license/ybiquitous/ybiq.svg)](LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Changelog](https://img.shields.io/badge/changelog-here-blue.svg)](CHANGELOG.md)

Useful command-line tools for Node.js project.

## Table of Contents

1.  [Install](#install)
2.  [Usage](#usage)
    1.  [CLI](#cli)
    2.  [API](#api)

## Install

```sh
npm install --save-dev ybiq
```

In addition, if you want to use [`eslint-config-ybiquitous`](https://npm.im/eslint-config-ybiquitous),
please run another install command.

```sh
npm install --save-dev eslint-config-ybiquitous
```

## Usage

### CLI

For details, please show help.

```sh
ybiq --help
```

### `init`

Setup npm project.

```sh
ybiq init
```

### API

```js
const ybiq = require("ybiq");

ybiq.init({
  // Default options
  // cwd: process.cwd(),
  // logger: msg => process.stdout.write(msg),
});
```
