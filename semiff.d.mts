export default function semiff(ver1: string, ver2: string): Difference | undefined;

export type Difference = 
    | 'major'
    | 'minor'
    | 'patch'
    | 'premajor'
    | 'preminor'
    | 'prepatch'
    | 'prerelease';