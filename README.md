# ybiq

[![NPM version](https://img.shields.io/npm/v/ybiq.svg)](https://www.npmjs.com/package/ybiq)
[![Build Status](https://travis-ci.org/ybiquitous/ybiq.svg?branch=master)](https://travis-ci.org/ybiquitous/ybiq)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Useful command-line tools for Node.js project.

## Install

```sh
npm install ybiq --save-dev
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

### Programmatic API

```js
const ybiq = require('ybiq')

ybiq.init()
```
