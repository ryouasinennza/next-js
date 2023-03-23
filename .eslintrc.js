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
    'sort-destructure-keys',
    'typescript-sort-keys',
    'testing-library',
    'unicorn',
    'sort-keys-fix',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-console': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
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
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        shorthandFirst: true,
        callbacksLast: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
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
