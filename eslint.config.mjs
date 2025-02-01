// @ts-check

import angularConfig from '@aneuhold/eslint-config/src/angular-config.js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
export default [
  ...angularConfig,
  {
    // other override settings. e.g. for `files: ['**/*.test.*']`
  }
];