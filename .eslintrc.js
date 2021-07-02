module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['prettier'],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    es6: true
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it"s not allowed to be reassigned)
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    'prettier/prettier': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // js/ts
    'eol-last': 'error', // 禁止文件末尾保留一行空行
    'no-trailing-spaces': 'error', // 禁用行尾空白
    // 'comma-style': ['error', 'last'],  // 逗号的风格，在末尾补上逗号
    // 'comma-dangle': ['error', 'always-multiline'], // 在[].{}中换行的尾部用上逗号
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }], // 默认单引号
    camelcase: ['error', { properties: 'never' }], // 驼峰语法
    // semi: ['error', 'never'], // 禁止使用半分号
    indent: ['error', 2, { SwitchCase: 1 }], // 前空隙，2个单位
    'object-curly-spacing': ['error', 'always'], // 强制在{}中使用一致的空格
    // 'arrow-parens': ['error', 'as-needed'], // 箭头函数需要括号
    '@typescript-eslint/explicit-module-boundary-types': 'off', // ts的约束
    '@typescript-eslint/no-explicit-any': 'off' // ts的约束
  }
};
