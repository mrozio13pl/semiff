const { execTimeSync } = require('@mrozio/exectime');
const { Suite } = require('benchmark');
const { bold } = require('ansis');

console.log('\nsemiff load time:', execTimeSync(() => require('semiff')), 'ms');
console.log('semver load time:', execTimeSync(() => require('semver/functions/diff')), 'ms');
console.log('semver-diff load time:', execTimeSync(() => require('semver-diff')), 'ms');

const semver = require('semver'); // semver v7
const semverDiff = require('semver-diff'); // semver v6
const semiff = require('semiff');

function bench(name, ...args) {
    console.log('\n' + bold.cyan`# ${name}`);

    new Suite()
        .add('semver', () => semver.diff(args[0], args[1]))
        .add('semver-diff', () => semverDiff(args[0], args[1]))
        .add('semiff', () => semiff(args[0], args[1]))
        .on('cycle', e => console.log('  ' + e.target))
        .run();
}

bench('basic 1.0.0 -> 1.1.0', '1.0.0', '1.1.0');
bench('patch version increase', '1.0.0', '1.0.1');
bench('minor version increase', '1.0.0', '1.1.0');
bench('major version increase', '1.0.0', '2.0.0');
bench('pre-release version compare', '1.0.0-alpha.1', '1.0.0-alpha.2');
bench('pre-release vs normal version compare', '1.0.0-alpha.1', '1.0.0');
bench('complex versions', '1.0.0-beta.1+sha', '1.0.0-beta.2+sha');