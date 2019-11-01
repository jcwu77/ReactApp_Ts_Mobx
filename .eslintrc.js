module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "import", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/indent": [2, 2],
    // import顺序
    "import/order": "warn",
    // 禁止出现console，除warn，error
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // 禁止在循环中使用await
    "no-await-in-loop": "error",
    // 数组方法的回调中必须使用return
    "array-callback-return": "error",
    // 复杂度阈值：2
    complexity: ["warn", 20],
    // switch中必须使用default
    "default-case": "error",
    // 必须使用===和!==
    eqeqeq: ["warn", "always"],
    // for-in 中必须判断
    "guard-for-in": "warn",
    // 禁止使用alert
    "no-alert": "warn",
    // 禁止使用arguments.caller和arguments.callee
    "no-caller": "error",
    // case语句中禁止声明变量
    "no-case-declarations": "error",
    //消除正则则表达式歧义
    "no-div-regex": "error",
    // if中禁止在其他情况下return
    "no-else-return": "warn",
    // 禁止使用空函数
    "no-empty-function": "warn",
    // 结构不能为空
    "no-empty-pattern": "error",
    //禁止 eval
    "no-eval": "error",
    //禁止扩展原生类型
    "no-extend-native": "error",
    //禁止不必要的标签
    "no-extra-label": "error",
    //switch
    "no-fallthrough": "error",
    // 禁止数字前或后添加小数点
    "no-floating-decimal": "error",
    //禁止改变原生对象的值
    "no-global-assign": "error",
    //禁止使用短符号进行类型转换
    "no-implicit-coercion": "error",
    //禁止在全局范围使用变量和函数声明
    "no-implicit-globals": "error",
    //禁止 this 关键字在类或类对象之外出现
    // 'no-invalid-this': 'error',
    //禁用迭代器
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    //魔术数字
    // 'no-magic-numbers': 'error',
    //多空格问题
    "no-multi-spaces": "error",
    //多行字符串
    "no-multi-str": "error",
    "no-new": "error",
    //禁用Function构造函数
    "no-new-func": "error",
    //禁止原始包装实例
    "no-new-wrappers": "error",
    //禁用八进制字面量
    "no-octal": "error",
    //禁止对函数参数再赋值
    "no-param-reassign": "error",
    //禁用__proto__
    "no-proto": "error",
    //禁止多次声明同一个变量
    "no-redeclare": "error",
    //return禁止赋值
    // 'no-return-assign': ['error', 'always'],
    //禁止return await
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    //禁止未使用过的表达式
    "no-unused-expressions": "error",
    "no-useless-concat": "error",
    //void
    "no-void": "error",
    //禁用 with 语句
    "no-with": "error",
    //要求使用 Error 对象作为 Promise 拒绝的原因
    "prefer-promise-reject-errors": "error",
    //要求必须有基数 parseInt
    radix: "error",
    //禁止使用不带 await 表达式的 async 函数
    "require-await": "error",
    //var 必须在作用域顶部
    "vars-on-top": "error",
    //需要把立即执行的函数包裹起来
    "wrap-iife": ["error", "outside"],
    // if Yoda 条件
    yoda: "error",
    //禁止删除变量
    "no-delete-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
