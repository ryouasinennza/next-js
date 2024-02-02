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
  plugins: [
    'import',
    'unused-imports',
    'sort-keys-fix',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'testing-library',
    'unicorn',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-cycle': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'never',
      },
    ],
    'no-console': 'error',
    'no-redeclare': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unicorn/prefer-module': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx)'],
      rules: {
        'storybook/default-exports': 'off',
        'storybook/hierarchy-separator': 'error',
      },
    },
    {
      files: ['index.ts'],
      plugins: ['sort-exports'],
      rules: {
        'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
      },
    },
  ],
}
