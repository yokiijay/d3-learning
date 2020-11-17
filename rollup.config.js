import typescript from '@rollup/plugin-typescript'
import html from '@rollup/plugin-html'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

/**@type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'esm'
  },
  plugins: [
    typescript(),
    html(),
    serve('./output'),
    livereload('output'),
    commonjs(),
    resolve(),
  ]
}

export default options
