[![npm](https://img.shields.io/npm/v/ybiq.svg)](https://www.npmjs.com/package/ybiq)
[![node](https://img.shields.io/node/v/ybiq.svg)](https://github.com/ybiquitous/ybiq)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# ybiq

Useful command-line tools for Node.js project.

## Install

```sh
npm install --save-dev ybiq
```

## Usage

### CLI

For details, please show the help.

```sh
ybiq --help
```

#### `ybiq init`

Setup npm project.

### API

<!-- lint disable code-block-syntax -->

```js
import { init } from "ybiq";

init({
  // Default options
  // cwd: process.cwd(),
  // logger: msg => process.stdout.write(msg),
});
```

<!-- lint enable code-block-syntax -->

## License

[MIT](LICENSE) © Masafumi Koba
