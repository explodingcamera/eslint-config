const config = require('config.json');
const babelModuleResolver = require.resolve('babel-plugin-module-resolver');

if (babelModuleResolver) {
	config.settings['import/resolver']['babel-module'] = {};
}

module.exports = config;
