const { ESLint } = require('eslint');
const fs = require('fs');

const eslint = new ESLint({
	useEslintrc: false,
	baseConfig: {
		extends: ['./base-config.js'],
	},
});

eslint
	.calculateConfigForFile('./sample.js')
	.then(config => {
		config.rules['react/jsx-key'] = ['warn'];
		config.rules['react/jsx-curly-brace-presence'] = ['warn'];

		config = JSON.stringify(config, null, 2);

		fs.writeFile('./config.json', config, err => {
			if (err) {
				console.error(err);
				return;
			}

			console.log('File has been created/updated');
		});
	})
	.catch(e => console.error(e));

eslint
	.calculateConfigForFile('./sample.ts')
	.then(configTS => {
		configTS.parser = '@typescript-eslint/parser';

		delete configTS.settings['import/parsers'];
		delete configTS.settings['import/resolver'];
		configTS.rules['react/jsx-key'] = ['warn'];
		configTS.rules['react/jsx-curly-brace-presence'] = ['warn'];

		configTS = JSON.stringify(configTS, null, 2);

		fs.writeFile('./config-ts.json', configTS, err => {
			if (err) {
				console.error(err);
				return;
			}

			console.log('File has been created/updated');
		});
	})
	.catch(e => console.error(e));
