/**
 * @see https://github.com/npm/node-semver/blob/main/test/functions/diff.js
 */

const { test } = require('tap');
const diff = require('./src');

test('diff versions test', t => {
//  [version1, version2, result]
//  diff(version1, version2) -> result
    [
        // ['1.2.3', '0.2.3', 'major'], legacy
        ['0.2.3', '1.2.3', 'major'],
        ['0.2.3', '1.4.5', 'major'],
        ['1.2.3', '2.0.0-pre', 'premajor'],
        ['1.2.3', '2.0.0-pre', 'premajor'],
        ['1.2.3', '1.3.3', 'minor'],
        ['1.0.1', '1.1.0-pre', 'preminor'],
        ['1.2.3', '1.2.4', 'patch'],
        ['1.2.3', '1.2.4-pre', 'prepatch'],
        ['0.0.1-pre', '0.0.1', 'patch'],
        ['0.0.1-pre-2', '0.0.1', 'patch'],
        ['1.1.0-pre', '1.1.0', 'minor'],
        ['1.1.0-pre-1', '1.1.0-pre-2', 'prerelease'],
        ['1.0.0', '1.0.0', undefined],
        ['1.0.0-1', '1.0.0-1', undefined],
        ['0.0.2-1', '0.0.2', 'patch'],
        ['0.0.2-1', '0.0.3', 'patch'],
        ['0.0.2-1', '0.1.0', 'minor'],
        ['0.0.2-1', '1.0.0', 'major'],
        ['0.1.0-1', '0.1.0', 'minor'],
        ['1.0.0-1', '1.0.0', 'major'],
        ['1.0.0-1', '1.1.1', 'major'],
        ['1.0.0-1', '2.1.1', 'major'],
        ['1.0.1-1', '1.0.1', 'patch'],
        ['0.0.0-1', '0.0.0', 'major'],
        ['1.0.0-1', '2.0.0', 'major'],
        ['1.0.0-1', '2.0.0-1', 'premajor'],
        ['1.0.0-1', '1.1.0-1', 'preminor'],
        ['1.0.0-1', '1.0.1-1', 'prepatch'],
    ].forEach(v => {
        const version1 = v[0];
        const version2 = v[1];
        const wanted = v[2];
        const found = diff(version1, version2);
        const cmd = `diff(${version1}, ${version2})`;
        t.equal(found, wanted, `${cmd} === ${wanted}`);
    });

    t.end();
});

test('throws on bad version', t => {
    t.throws(() => {
        diff('bad', '1.2.3');
    }, {
        message: 'Invalid Version: bad',
        name: 'TypeError',
    });
    t.end();
});