module.exports = {
  extends: [
    'stylelint-8-point-grid',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'value-keyword-case': null,
    'function-no-unknown': null,
  },
}
