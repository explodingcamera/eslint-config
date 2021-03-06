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
		config.parser = '@babel/eslint-parser';
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
