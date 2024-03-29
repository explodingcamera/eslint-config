const config = {
	extends: ['plugin:promise/recommended', 'xo', 'xo-react', 'prettier'],
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			legacyDecorators: true,
			jsx: true,
		},
	},
	plugins: ['promise', 'unicorn', 'react', 'react-hooks', 'prettier'],
	rules: {
		camelcase: 'off', // super annoying for API's
		'@next/next/no-img-element': 0, // next/image is not supported for SSG
		'arrow-body-style': 0, // really annoying when writing functional react components
		'capitalized-comments': ['off'],
		'comma-dangle': ['error', 'always-multiline'],
		'default-case': ['off'],
		'lines-between-class-members': 0,
		'new-cap': 'warn',
		'no-negated-condition': 'warn',
		'no-return-assign': ['error', 'except-parens'],
		'no-unused-expressions': 0,
		'object-curly-spacing': ['error', 'always'],
		'prefer-const': 'warn',
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'all',
				endOfLine: 'auto',
				useTabs: true,
				singleQuote: true,
				printWidth: 80,
				arrowParens: 'avoid',
			},
		],
		'promise/always-return': 0,
		'promise/prefer-await-to-then': 0,
		radix: 'warn',
		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react/boolean-prop-naming': 0,
		'react/destructuring-assignment': 0,
		'react/forbid-component-props': 0,
		'react/forbid-dom-props': 0,
		'react/function-component-definition': 0,
		'react/jsx-child-element-spacing': 0,
		'react/jsx-fragments': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
				when: 'multiline',
			},
		],
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-sort-props': 0,
		'react/jsx-key': 'warn',
		'react/no-array-index-key': 'warn',
		'react/no-danger': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-unescaped-entities': 0,
		'react/no-unused-prop-types': 0, // this can be buggy with typescript
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		'react/state-in-constructor': 'warn',
		'react/static-property-placement': 'warn',
		'react/jsx-no-target-blank': 0,
		'react/hook-use-state': 0,
		'require-atomic-updates': 'warn',
		'unicorn/no-abusive-eslint-disable': 'warn',
		'valid-jsdoc': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

const cfg = JSON.parse(JSON.stringify(config));

config.overrides = [];
config.overrides[0] = {
	...cfg,
	files: ['**/*.ts', '**/*.tsx'],
	extends: [
		...cfg.extends,
		'plugin:@typescript-eslint/recommended',
		'xo-typescript',
	],
	plugins: [...cfg.plugins, '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		warnOnUnsupportedTypeScriptVersion: false,
	},
	rules: {
		...cfg.rules,
		'@typescript-eslint/no-redundant-type-constituents': 'off', // redundant type constituents can be great for documentation
		'@typescript-eslint/comma-dangle': ['off'],
		'@typescript-eslint/consistent-indexed-object-style': ['warn'],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'@typescript-eslint/indent': ['off'],
		'@typescript-eslint/lines-between-class-members': ['off'],
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-confusing-void-expression': ['off'],
		'@typescript-eslint/no-empty-interface': ['off'],
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_$',
			},
		],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/prefer-optional-chain': ['warn'],
		'@typescript-eslint/prefer-readonly': ['off'],
		'@typescript-eslint/prefer-readonly-parameter-types': ['off'],
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/restrict-template-expressions': ['off'],
		'@typescript-eslint/consistent-type-definitions': ['off'],
		'@typescript-eslint/triple-slash-reference': 0,
		'comma-dangle': ['off'],
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_$',
			},
		],
		'object-curly-spacing': 'off',
	},
};

module.exports = config;
