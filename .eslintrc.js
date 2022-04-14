const prettierrc = require('rc')('./prettier')

module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['prettier', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'prettier/prettier': ['error', prettierrc]
  }
}
