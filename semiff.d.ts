declare function semiff(ver1: string, ver2: string): semiff.Difference | undefined;

declare namespace semiff {
    type Difference = 
        | 'major'
        | 'minor'
        | 'patch'
        | 'premajor'
        | 'preminor'
        | 'prepatch'
        | 'prerelease';
}

export = semiff;