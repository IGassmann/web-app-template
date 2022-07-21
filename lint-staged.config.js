const ESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((file) => file.split(process.cwd())[1])
    .join(' --file ')}`;

// Workaround for including TypeScript ambient declarations.
// @see https://github.com/gustavopch/tsc-files/issues/20#issuecomment-996124875
const TypeScriptAmbientDeclarationFiles = [
  './next-env.d.ts',
  './src/types/global.d.ts',
];

module.exports = {
  // Type check TypeScript files
  '**/*.{tsx,ts}': `tsc-files --noEmit ${TypeScriptAmbientDeclarationFiles.join(' ')}`,
  // Run ESLint before Prettier for TypeScript and JavaScript files
  './src/**/*.{tsx,ts,js}': [ESLintTask, 'prettier --write'],
  // Run Prettier for non-TypeScript and non-JavaScript files
  '!(./src/**/*.{tsx,ts,js})': 'prettier --ignore-unknown --write',
};
