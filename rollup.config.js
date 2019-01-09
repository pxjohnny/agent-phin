import { rollup } from 'rollup';
import { terser } from "rollup-plugin-terser";

export default {
  input: './lib/phin.js',
  plugins: [
    terser()
  ],
  output: {
    file: './lib/phin.min.js',
    format: 'cjs'
  }
};
