module.exports = {
	extends: ['xo', 'xo-react', 'prettier', 'prettier/react'],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true,
		},
	},
	plugins: ['prettier', 'unicorn'],
	rules: {
		'prettier/prettier': ['error', {
			"trailingComma": "all",
			"useTabs": true,
			"singleQuote": true,
			"printWidth": 80
		}],
		'comma-dangle': ['error', 'always-multiline'],
		'no-unused-expressions': 0,
		'no-return-assign': ['error', 'except-parens'],
		'lines-between-class-members': 0,
		'react/jsx-child-element-spacing': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/destructuring-assignment': 'never',
		'react/forbid-component-props': [
			'warn',
			{
				forbid: ['style'],
			},
		],
		'react/no-danger': 'warn',
		'react/forbid-dom-props': [
			'warn',
			{
				forbid: ['style'],
			},
		],
		'react/no-unescaped-entities': 0,
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
				when: 'multiline',
			},
		],
		'react/no-deprecated': 'warn',
		'react/jsx-sort-props': 0,
		'unicorn/filename-case': [
			'error',
			{
				case: 'kebabCase',
			},
		],
		'unicorn/no-abusive-eslint-disable': 'warn',
		"react/jsx-indent": "off",
		"react/jsx-fragments": "off",
	},
	settings: {
		react: {
			version: '16',
		},
	},
};
