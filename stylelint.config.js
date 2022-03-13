module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  customSyntax: '@stylelint/postcss-css-in-js',
  plugins: ['stylelint-order'],
  rules: {
    'value-keyword-case': null,
  },
}
