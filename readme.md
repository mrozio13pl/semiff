# semiff [![npm](https://img.shields.io/npm/v/semiff?color=4CAF50&label=)](https://npm.im/semiff)

> A tiny (790B) utility to get the type difference between two [semver](https://semver.org/spec/v2.0.0.html) versions.

This is a lightweight recreation of [`semver#diff`](https://github.com/npm/node-semver/blob/main/functions/diff.js) function.\
Supports both ESM and CJS.

## Install

```sh
npm i semiff
```

## Usage

```ts
import semiff from 'semiff';

semiff('1.0.0', '2.0.0'); // major
semiff('1.0.0', '1.1.0'); // minor
semiff('1.1.1', '1.1.2'); // patch
semiff('1.0.0-1', '1.0.1-1'); // prepatch
semiff('1.1.0-pre-1', '1.1.0-pre-2'); // prerelease
semiff('1.0.0', '1.0.0'); // undefined
```

If both versions are equal, `undefined` will be returned.

Possible outcomes:

* `'major'`
* `'premajor'`
* `'minor'`
* `'preminor'`
* `'patch'`
* `'prepatch'`
* `'prerelease'`
* `undefined`

## License

MIT 💖