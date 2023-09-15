module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'rules': {
		'indent': [
			'error',
			'spaces',
			4
		],
		'linebreak-style': 'off',
		'quotes': [
			'error',
			'single'
		],
		'semi': [ // 语句强制分号结尾
			'error',
			'always'
		],
		'no-alert': 0, // 禁止使用alert confirm prompt
		'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
		'no-dupe-args': 2, // 函数参数不能重复
		'no-duplicate-imports': [
			1,
			{
				includeExports: true
			}
		], // 不允许重复导入

		'no-duplicate-case': 2, // switch中的case标签不能重复
		'padded-blocks': 0, // 块语句内行首行尾是否要空行
		'space-after-keywords': [0, 'always'], // 关键字后面是否要空一格
		'space-before-blocks': [0, 'always'], // 不以新行开始的块{前面要不要有空格
		'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
		'space-in-parens': [0, 'never'], // 小括号里面要不要有空格
		'eqeqeq': 0, // 必须使用全等
		'no-var': 0, // 禁用var，用let和const代替
		'no-inline-comments': 0, // 禁止行内备注
		'no-multiple-empty-lines': [1, {'max': 2}], // [1, {"max": 2}],空行最多不能超过2行
		'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
		'no-extra-semi': 0, // 禁止多余的冒号
	}
};
