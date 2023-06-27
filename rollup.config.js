import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'lib/main.ts',
        output: {
            file: 'dist/storage.esm.js',
            format: 'esm'
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            babel({
                babelHelpers: 'bundled',
                babelrc: false,
                presets: [['env', { modules: false }]],
                exclude: 'node_modules/**'
            }),
        ]
    },
    {
        input: 'lib/main.ts',
        output: {
            file: 'dist/storage.umd.js',
            name: 'Storage',
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            babel({
                babelHelpers: 'bundled',
                babelrc: false,
                presets: [['env', { modules: false }]],
                exclude: 'node_modules/**'
            }),
        ]
    },
    {
        input: 'lib/main.ts',
        output: {
            file: 'dist/storage.d.ts',
            format: 'esm'
        },
        plugins: [
            resolve(),
            typescript(),
            dts()
        ]
    },
];