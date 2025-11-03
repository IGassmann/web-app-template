import { type Config } from 'prettier';

const config: Config = {
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/styles/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderTypeScriptVersion: '5.4.3',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // Must come last
  ],
};

export default config;
