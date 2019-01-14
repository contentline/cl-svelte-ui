import babel from 'rollup-plugin-babel'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

module.exports = {
  input: 'src/components/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify(mode)
    }),
    svelte({
      generate: 'ssr',
      dev,
      hydratable: true,
      emitCss: false
    }),
    resolve(),
    commonjs(),
    json(),
    legacy && babel({
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
};