module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    project: './tsconfig.json', // Specify it only for TypeScript files
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/semi': 'off',
    'import/first': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'new-cap': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
};
