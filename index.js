const config = require('./config.json');

const babelModuleResolver = require.resolve('babel-plugin-module-resolver');
const typescript = require.resolve('typescript');

config.overrides = [];

if (babelModuleResolver) {
	config.settings['import/resolver']['babel-module'] = {};
}

if (typescript) {
	const configTS = require('./config-ts.json');
	config.overrides.push({
		...configTS,
		files: ['**/*.ts', '**/*.tsx'],
	});
}


module.exports = config;
