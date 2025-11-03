import { fileURLToPath } from 'node:url';
import commentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { includeIgnoreFile } from '@eslint/compat';
import nextVitalsConfig from 'eslint-config-next/core-web-vitals';
import nextTsConfig from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';
import tsdoc from 'eslint-plugin-tsdoc';
import { defineConfig } from 'eslint/config';

const tsDocConfig = {
  name: 'tsdoc',
  plugins: {
    tsdoc,
  },
  files: ['**/*.{ts,tsx}'],
  rules: {
    'tsdoc/syntax': 'error', // Validate TSDoc comments conform to the TSDoc specification.
  },
};

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  ...nextVitalsConfig,
  ...nextTsConfig,
  tsDocConfig,
  commentsConfigs.recommended,
  prettierConfig,
  {
    rules: {
      'consistent-return': 'off', // When enabled, it makes it impossible to use early returns without explicitly returning undefined
      'react/jsx-props-no-spreading': 'off', // Prop types already protect against passing invalid or unnecessary props down to components
      'react/require-default-props': 'off', // This rule doesn't play well with TypeScript
      'import/no-extraneous-dependencies': 'off', // pnpm already prohibits extraneous dependencies
      '@eslint-community/eslint-comments/require-description': 'error', // Prevents disabling eslint rules without providing a reason
    },
  },
]);
