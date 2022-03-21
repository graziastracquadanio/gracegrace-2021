module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    // 'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: 'module',
    // project: './tsconfig.json',
  },
  plugins: ['import', 'react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    // prevent issues between prettier and eslint
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // more eslint config
    'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
    'no-use-before-define': 'off',
    'lines-between-class-members': 'off',
    // react config
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.js'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // import config
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never', js: 'never' }],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-cycle': [2, { maxDepth: 1 }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], moduleDirectory: ['node_modules', 'src'] },
    },
    react: { version: 'detect' },
  },
};
