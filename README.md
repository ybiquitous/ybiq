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

Show the help for details:

```sh
ybiq --help
```

#### `ybiq init`

The `ybiq init` command sets up your npm project.

#### `ybiq run`

The `ybiq run` command runs scripts in parallel.

```sh
# Run shell commands in parallel
ybiq run "echo hello" "echo world"

# Run npm scripts in parallel
ybiq run --npm lint:js lint:md lint:types
```

### API

You also can use this package programmatically.

<!-- lint disable code-block-syntax -->

```js
import { init, run } from "ybiq";

// Initialize project
await init({
  // Default options
  // cwd: process.cwd(),
  // logger: msg => process.stdout.write(msg),
});

// Run scripts in parallel
await run({
  scripts: ["echo hello", "echo world"],
  // npm: false, // Set to true to run npm scripts
  // labeler: (script) => script,  // Customize script labels
  // stdout: process.stdout,
  // stderr: process.stderr,
});
```

<!-- lint enable code-block-syntax -->
