module.exports = {
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:promise/recommended',
		'xo',
		'xo-react',
		'prettier',
		'prettier/react',
		'prettier/babel',
		'prettier/unicorn',
	],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			legacyDecorators: true,
			jsx: true,
		},
	},
	plugins: [
		'prettier',
		'promise',
		'babel',
		'unicorn',
		'react-hooks',
		'react-native',
		'import',
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'all',
				useTabs: true,
				singleQuote: true,
				printWidth: 80,
			},
		],
		'react/boolean-prop-naming': 0,
		'comma-dangle': ['error', 'always-multiline'],
		'no-unused-expressions': 0,
		'no-return-assign': ['error', 'except-parens'],
		'lines-between-class-members': 0,
		'react/jsx-child-element-spacing': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/destructuring-assignment': 0,
		'react/forbid-component-props': [
			'warn',
			{
				forbid: ['style'],
			},
		],
		'react/static-property-placement': 'warn',
		'react/state-in-constructor': 'warn',
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
		'react/jsx-indent': 'off',
		'react/jsx-fragments': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'valid-jsdoc': 0,
		'babel/no-unused-expressions': 1,
		'import/order': 0,
		'import/no-unresolved': 0,
		'import/default': 0,
		'promise/always-return': 0,
		'require-atomic-updates': 'warn',
	},
	settings: {
		react: {
			version: '999.999',
		},
		'import/resolver': {
			'babel-module': {},
		},
	},
};
