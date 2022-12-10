import { ThemeProvider } from 'styled-components'
import { GlobalStyle, getTheme } from '../src/style'

export const decorators = [
  (Story) => {
    return (
      <>
        <ThemeProvider theme={getTheme('light')}>
          <GlobalStyle />
          {Story()}
        </ThemeProvider>
      </>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      expanded: true,
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
