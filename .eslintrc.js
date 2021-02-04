module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
    ],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'no-console': 'warn',
      'no-new': 'off',
      'no-debugger':
        process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境不能有 debugger
      semi: 'off',
      // 'no-unused-expressions': 'off',
      // 'consistent-return': 'off',
      'comma-dangle': 'off', // 对象、数组最后不必有逗号
      'no-param-reassign': ['error', { props: false }], // 不可直接对函数参数赋值，但是修改参数的属性值
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 只允许在for循环中使用自增和自减
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'warn', // 单一导出时，可以不是默认导出
      'linebreak-style': 'off', // 不区分 CRLF 和 LF
      'vue/no-v-html': 'off', // vue 模板中允许使用 v-html
      'arrow-parens': 'off', // 箭头函数中一个参数时，可以省略括号
      'wrap-iife': 'off', // 不必用括号包裹立即执行的函数表达式（IIFE）
      'no-nested-ternary': 'off', // 允许三目表达式的嵌套
      'no-restricted-syntax': [ // 覆写 airbnb no-restricted-syntax 规则: 允许使用for..of
        'error',
        {
          selector: 'ForInStatement',
          message: 'for..in 的会访问原型链，建议用 Object.{keys,values,entries} 代替',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels 是GOTO的一种形式；使用标签会使代码混乱且难以维护',
        },
        {
          selector: 'WithStatement',
          message: '`with` 不允许在 strict mode 使用，因为它将使得代码变得难以预测和优化',
        },
      ],
    },
  };
  