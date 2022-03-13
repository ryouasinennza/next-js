import { AppProps } from 'next/app'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../style'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
