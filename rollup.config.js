// rollup.config.js
import 'rollup'; /* eslint no-unused-vars: 0*/
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
//import uglify from 'rollup-plugin-uglify';
import { terser } from "rollup-plugin-terser";

export default {
	output: {
	  format: 'iife'
  },
	sourcemap: 'public/',
	intro: `
	/* eslint-disable */
	`,
	plugins: [
		resolve({
			module: true, // Default: true
			jsnext: true,	// Default: false
			main: true,	// Default: true
			browser: true,
      		extensions: [ '.js' ],  // Default: ['.js']
		}),
		builtins(),
		commonjs({
      		include: 'node_modules/**',
		}),
    terser() // Code minification
	]
};
