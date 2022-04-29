module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'value-keyword-case': null,
    'function-no-unknown': null,
  },
}
