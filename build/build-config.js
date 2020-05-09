const CLIEngine = require('eslint').CLIEngine;
const fs = require('fs');

const cli = new CLIEngine({
	useEslintrc: false,
	baseConfig: {
		extends: ['./base-config.js'],
	},
});

let config = cli.getConfigForFile('./sample.js');
let configTS = cli.getConfigForFile('./sample.ts');

config.parser = 'babel-eslint';
configTS.parser = '@typescript-eslint/parser';

config = JSON.stringify(config, null, 2);
configTS = JSON.stringify(configTS, null, 2);

fs.writeFile('./config.json', config, err => {
	if (err) {
		console.error(err);
		return;
	}

	console.log('File has been created/updated');
});

fs.writeFile('./config-ts.json', configTS, err => {
	if (err) {
		console.error(err);
		return;
	}

	console.log('File has been created/updated');
});
