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
          rewrite: {
            description: 'A re-implementation of an existing functionality',
            title: 'Rewrites',
            emoji: '🔄',
          },
          config: {
            description: 'A change to the configuration of the repository and tools',
            title: 'Configuration',
            emoji: '🔧',
          },
        },
      },
    },
  },
};

module.exports = Configuration;
