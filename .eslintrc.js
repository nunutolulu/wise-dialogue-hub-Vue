module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': ['plugin:vue/essential', 'standard'],
	'parserOptions': {
		'ecmaVersion': 15,
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module',
	},
	'plugins': ['vue', '@typescript-eslint'],
	'rules': {
		'indent': 0,
        // 允许花括号有空格
		'object-curly-spacing': ['error', 'always'],
		// 去除方法名和括号间的空格
		'space-before-function-paren': 0,
		'no-tabs': 'off',
		'vue/no-multiple-template-root': 'off',
	},
}
