// rollup.config.js
import 'rollup'; /* eslint no-unused-vars: 0*/
import resolve from 'rollup-plugin-node-resolve';
//import uglify from 'rollup-plugin-uglify'; 
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js', 
	output: { 
	  format: 'iife'
  },
	sourcemap: 'public/',
	intro: `
	/* eslint-disable */
	`,
	plugins: [
		resolve({
			browser: true,
      		extensions: [ '.js' ],  // Default: ['.js']
		}),
    terser() // Code minification
	]
};
