const ESLintTask = (fileNames) =>
  `next lint --fix --file ${fileNames
    .map((file) => file.split(process.cwd())[1])
    .join(' --file ')}`;

const config = {
  // Type-check TypeScript files
  '**/*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
  // Run ESLint and Prettier consecutively so that the tasks don't conflict with each other
  './src/**/*.{tsx,ts}': [ESLintTask, 'prettier --write'],
  // Run Prettier in parallel for non-TypeScript files
  '!(./src/**/*.{tsx,ts})': 'prettier --ignore-unknown --write',
};

export default config;
