import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { GlobalStyle, theme } from '../style'

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default App
