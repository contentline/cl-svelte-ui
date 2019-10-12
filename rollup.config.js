import babel from 'rollup-plugin-babel'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-porter';
import postcss from 'postcss';
import path from "path";
import { createFilter } from 'rollup-pluginutils';
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD


// function svg(options = {}) {
//     const filter = createFilter(options.include, options.exclude);
//     return {
//         transform(SVGContent, filePath) {
//             if (!filter(filePath) || path.extname(filePath) !== '.svg') {
//                 return null;
//             }
//             return {
//                 code: `export default ${JSON.stringify(
//                     svgLoader.getExtractedSVG(SVGContent, options)
//                 )}`,
//                 map: { mappings: '' }
//             };
//         }
//     };
// }

const plugins = [
    require('postcss-import'),
    require('precss'),
    require('postcss-nested')
];

const preprocess = {
    style: ({ content, filename, attributes }) => {
        // Plugins List:
        // https://github.com/postcss/postcss/blob/master/docs/plugins.md

        // const withGlobals = `@import '/static/styles.css';\r\n${content}`;

        return new Promise((fulfil, reject) => {
            postcss(plugins)
                .process(content, {
                    from: 'src',
                    parser: require('postcss-comment'),
                    map: { inline: false }
                })
                .then(result => {
                    fulfil({
                        code: result.css.toString(),
                        map: result.map.toString()
                    });
                })
                .catch(err => reject(err));
        });
    }
};

module.exports = {
    input: [ 'test/main.js' ],
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [
        svg(),
        css(),
        replace({
            'process.browser': true,
            'process.env.NODE_ENV': JSON.stringify(mode)
        }),
        svelte({
            dev,
            preprocess,
            hydratable: true
        }),
        resolve(),
        commonjs(),
        babel({
            extensions: ['.js', '.html'],
            runtimeHelpers: true,
            exclude: ['node_modules/@babel/**'],
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: '> 0.25%, not dead'
                    }
                ]
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                [
                    '@babel/plugin-transform-runtime',
                    {
                        useESModules: true
                    }
                ]
            ]
        }),
        !dev &&
        terser({
            module: true
        })
    ]
}