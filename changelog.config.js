module.exports = {
  disableEmoji: false,
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'ci', 'remove'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'issues'],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      value: 'fix',
    },
    remove: {
      description: 'A deprecated removed',
      value: 'remove',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      value: 'release',
    },
    test: {
      description: 'Adding missing tests',
      value: 'test',
    },
  },
};
