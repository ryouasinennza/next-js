import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../style'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>blog</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
