module.exports = {
	extends: 'standard',
	parser: 'babel-eslint',
	plugins: ['react'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'no-console': 'off',
		'react/no-unescaped-entities': 0,
		semi: 2,
		'no-unused-vars': 0,
		'react/prop-types': 'off',
		'react/jsx-no-bind': [
			'error',
			{
				allowArrowFunctions: true,
				allowBind: false,
				ignoreRefs: true
			}
		],
		'react/react-in-jsx-scope': 'error'
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	env: {
		browser: true,
		node: true
	}
};
