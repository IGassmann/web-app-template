import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'rewrite',
        'perf',
        'docs',
        'style',
        'test',
        'build',
        'config',
        'chore',
        'revert',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        enum: {
          refactor: {
            description:
              'A code change made to make it easier to understand and cheaper to modify without changing its observable behavior',
            title: 'Refactoring',
            emoji: '🔀',
          },
          rewrite: {
            description: 'A re-implementation of an existing functionality',
            title: 'Code Rewrite',
            emoji: '🔁',
          },
          config: {
            description:
              'Changes to project configuration files (example scopes: `prettier`, `package-json`, `eslint`)',
            title: 'Configuration',
            emoji: '🔧',
          },
          chore: {
            description: 'Maintenance tasks',
            title: 'Chores',
            emoji: '♻️',
          },
        },
      },
    },
  },
};

module.exports = Configuration;
