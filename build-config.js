const CLIEngine = require('eslint').CLIEngine;
const fs = require('fs');

const cli = new CLIEngine({
	useEslintrc: false,
	baseConfig: {
		extends: ['./base-config.js'],
	},
});

let config = cli.getConfigForFile('./index');
config.parser = 'babel-eslint';

config = JSON.stringify(config, null, 2);

fs.writeFile('./config.json', config, err => {
	if (err) {
		console.error(err);
		return;
	}

	console.log('File has been created/updated');
});
