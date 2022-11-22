const path = require('path');

const ESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

// Workaround for including TypeScript ambient declarations.
// @see https://github.com/gustavopch/tsc-files/issues/20#issuecomment-996124875
const TypeScriptAmbientDeclarationFiles = ['./next-env.d.ts'];

module.exports = {
  // Type check TypeScript files
  '**/*.{tsx,ts}': `tsc-files --noEmit ${TypeScriptAmbientDeclarationFiles.join(' ')}`,
  // Run tests
  './src/**/*.{ts,tsx}': 'jest --bail --passWithNoTests --findRelatedTests',
  // Run ESLint and Prettier consecutively for TypeScript files
  './{src,test}/**/*.{tsx,ts}': [ESLintTask, 'prettier --write'],
  // Run Prettier for non-TypeScript files
  '!(./{src,test}/**/*.{tsx,ts})': 'prettier --ignore-unknown --write',
};
