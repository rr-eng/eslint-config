module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rulse: {
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/order': 'error',
    "no-useless-return": "warn",
    "no-return-await": "warn"
  },
};
