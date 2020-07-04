module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'double'],
    "linebreak-style": "off",
    "import/extensions": "off", // 取消對副檔名的驗證
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
};
