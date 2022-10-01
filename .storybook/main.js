module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    'storybook-addon-designs',
  ],
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
      },
    },
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
}
