import { ThemeProvider } from 'styled-components'
import {  GlobalStyle } from '../src/styles/GlobalStyle'
import { getTheme } from '../src/styles/theme'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      title: true,
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      expanded: true,
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      macbook: {
        name: 'macbook',
        styles: {
          width: '1280px',
          height: '832px',
        },
      },
      iphone_se: {
        name: 'iphone se',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
    },
  },
}

export const decorators = [
  (Story, context) => {
    const theme = context.parameters.theme || context.globals.theme
    return (
      <>
        <ThemeProvider theme={getTheme(theme)}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </>
    )
  },
]
