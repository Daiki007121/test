import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    plugins: {
      jest: jest,
    },
    ...jest.configs.recommended,
  },
];
