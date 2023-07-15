import type { StorybookConfig } from '@storybook/nextjs'
import type { RuleSetRule } from 'webpack'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-links'],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (rule.test instanceof RegExp && rule.test && rule.test.test('.svg')) {
        return {
          ...rule,
          exclude: /\.svg$/,
        }
      }
      return rule
    })

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default config
