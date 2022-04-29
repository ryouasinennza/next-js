import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../src/style'

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
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
