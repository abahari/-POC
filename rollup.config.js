import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');

export default {
    input: 'src/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib'
        }
    ],
    plugins: [
        external(),
        resolve(),
        babel({ 
            babelHelpers: 'bundled',
            exclude: "node_modules/**",
            presets: ["@babel/preset-react"]
        }),
        commonjs(),
        postcss(),
        terser()
    ],
    external: ['react']
}