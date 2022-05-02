module.exports = {
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['import', 'unused-imports', 'sort-keys-fix', 'typescript-sort-keys', 'testing-library', 'unicorn'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-console': 'warn',
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-keys': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'import/no-cycle': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
      },
    },
    {
      files: ['*.test.@(ts|tsx|js|mjs|cjs)'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['src/**/*.test.{ts.tsx}'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
