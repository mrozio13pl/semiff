const { minify } = require('rollup-plugin-esbuild');

module.exports = [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'cjs'
        },
        plugins: [minify()]
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.mjs',
            format: 'es'
        },
        plugins: [minify()]
    }
];