const ESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((file) => file.split(process.cwd())[1])
    .join(' --file ')}`;

export default {
  // Run tests
  './src/**/*.{ts,tsx}': 'jest --bail --passWithNoTests --findRelatedTests',
  // Run ESLint and Prettier consecutively so that the tasks don't conflict with each other
  './{src,test}/**/*.{tsx,ts}': [ESLintTask, 'prettier --write'],
  // Run Prettier in parallel for non-TypeScript files
  '!(./{src,test}/**/*.{tsx,ts})': 'prettier --ignore-unknown --write',
};
