import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import tsdoc from 'eslint-plugin-tsdoc';
import { defineConfig } from 'eslint/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: [
      ...compat.extends('airbnb'),
      ...compat.extends('airbnb-typescript'),
      ...compat.extends('plugin:unicorn/recommended'),
      ...nextCoreWebVitals,
      ...compat.extends('plugin:eslint-comments/recommended'),
      ...compat.extends('prettier'),
    ],

    plugins: {
      tsdoc,
    },

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      'consistent-return': 'off', // When enabled, it makes it impossible to use early returns without explicitly returning undefined
      'react/jsx-props-no-spreading': 'off', // Prop types already protect against passing invalid or unnecessary props down to components.
      'react/require-default-props': 'off', // This rule doesn't play well with TypeScript.
      'import/no-extraneous-dependencies': 'off', // pnpm already prohibits extraneous dependencies.
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            props: true, // Allow "props" as an abbreviation since it's a common React convention.
          },
        },
      ],
      'eslint-comments/require-description': 'error', // Prevents disabling eslint rules without providing a reason.
      'tsdoc/syntax': 'error',
    },
  },

  {
    files: ['./src/app/**/route.ts'],
    rules: {
      'import/prefer-default-export': 'off', // Route handlers must be exported as named exports to work.
    },
  },
]);
