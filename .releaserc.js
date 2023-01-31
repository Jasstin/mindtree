module.exports = {
  branches: ['release'], // 指定要在哪个分支下执行发布操作
  plugins: [
    '@semantic-release/commit-analyzer', // 解析commit信息
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
      },
    ],
  ],
};
