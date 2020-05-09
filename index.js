const config = require('./config.json');

config.overrides = [];

try {
	require.resolve('babel-plugin-module-resolver');

	config.settings['import/resolver']['babel-module'] = {};
} catch (_) {}

try {
	require.resolve('typescript');

	const configTS = require('./config-ts.json');
	const i = config.overrides.push({
		...configTS,
		files: ['**/*.ts', '**/*.tsx'],
	});
	delete config.overrides[i - 1].ignorePatterns;
} catch (_) {}

module.exports = config;
