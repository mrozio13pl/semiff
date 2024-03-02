const semverRegex = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;

/**
 * Parse a version string.
 * @param {string} version Version.
 *
 * @example
 * ```js
 * parse('1.0.0-pre');
 * // => [1, 0, 0, 'pre']
 * ```
 */
function parse(version) {
    const match = version.match(semverRegex);

    if (!match) {
        throw new TypeError(`Invalid Version: ${version}`);
    }

    const [, major, minor, patch, , prerelease] = match;

    return [
        +major,
        +minor,
        +patch,
        prerelease
    ];
}

/**
 * Compare two version segments.
 * @param {number} a First version segment.
 * @param {number} b Second version segment.
 */
function compareMain (a, b) {
    if (a && b) {
        a = +a;
        b = +b;
    }

    return a === b ? 0 : (a < b ? -1 : 1);
}

/**
 * Compare two prereleases.
 * @param {string} pre1 First prerelease.
 * @param {string} pre2 Second prerelease.
 */
function comparePre(pre1, pre2) {
    if (pre1 && !pre2) {
        return -1;
    } else if (!pre1 && pre2) {
        return 1;
    } else if (!pre1 && !pre2) {
        return 0;
    }

    let i = 0;
    do {
        const a = pre1[i];
        const b = pre2[i];
        if (a === undefined && b === undefined) {
            return 0;
        } else if (a === b) {
            continue;
        } else {
            return compareMain(a, b);
        }
    } while (++i);
}

/**
 * Compare two versions.
 * @param {string} ver1 First version.
 * @param {string} ver2 Second version.
 */
function compare(ver1, ver2) {
    return (
        compareMain(ver1[0], ver2[0]) ||
        compareMain(ver1[1], ver2[1]) ||
        compareMain(ver1[2], ver2[2]) ||
        comparePre(ver1[3], ver2[3])
    );
}

/**
 * Get the difference type between two semver versions.
 * @param {string} ver1 First version.
 * @param {string} ver2 Second version.
 */
function semiff(ver1, ver2) {
    ver1 = parse(ver1);
    ver2 = parse(ver2);

    const comparison = compare(ver1, ver2);

    // versions are equal
    if (comparison === 0) {
        return;
    }

    // swap versions if the first version is higher than the second one
    const [lowVer, highVer] = comparison < 0 ? [ver1, ver2] : [ver2, ver1];

    // check if versions are prereleases
    const lowHasPre = !!lowVer[3];
    const highHasPre = !!highVer[3];

    if (lowHasPre && !highHasPre) {
        // if the lower version has only a major, then it will always be a major
        if (!lowVer[2] && !lowVer[1]) {
            return 'major';
        }

        if (highVer[2]) {
            return 'patch';
        }

        if (highVer[1]) {
            return 'minor';
        }

        return 'major';
    }

    // add `pre` prefix if the high version is a prerelease
    const prefix = highHasPre ? 'pre' : '';

    if (ver1[0] !== ver2[0]) return prefix + 'major';
    if (ver1[1] !== ver2[1]) return prefix + 'minor';
    if (ver1[2] !== ver2[2]) return prefix + 'patch';

    // both versions are prereleases
    return 'prerelease';
}

module.exports = semiff;