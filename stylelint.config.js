module.exports = {
  extends: ['stylelint-8-point-grid', 'stylelint-config-standard', 'stylelint-config-recess-order'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'value-keyword-case': null,
    'function-no-unknown': null,
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: [/.*/],
      },
    ],
    // remを許可しない
    'unit-allowed-list': ['px', '%', 'fr', 'vh', 'vw', 's', 'ms', 'deg'],
    // 4の倍数縛り
    'plugin/8-point-grid': {
      base: 4,
      allowlist: ['4px'],
      // ルールを提要しないプロパティ
      ignorelist: ['top', 'left', 'right', 'bottom'],
    },
  },
}
