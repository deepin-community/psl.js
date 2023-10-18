const nodeResolve = require("@rollup/plugin-node-resolve").nodeResolve;
const babel = require("@rollup/plugin-babel");
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const nodePolyfills = require('rollup-plugin-node-polyfills');
module.exports = {
	input: "dist/index.js",
	plugins: [
		json({
			preferConst: true,
			include: ['data/**']
		}),
		commonjs({
			include: 'node_modules/**'
		}),
		nodeResolve({
			extensions: [ '.js', '.json' ],
			mainFields: ['module', 'main'],
			preferBuiltins: false,
			modulePaths: ['/usr/share/nodejs'],
		}),
		babel(),
		nodePolyfills()
	],
	output: {
		extend: true,
		file: "dist/psl.js",
		format: "iife",
		name: "psl"
	}
}
