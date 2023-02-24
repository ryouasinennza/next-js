import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { GlobalStyle } from '../styles/GlobalStyle'
import { getTheme, useTheme } from '../styles/theme'

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [themeType, themeToggle] = useTheme()
  const customPageProps = { ...pageProps, themeToggle }

  return (
    <>
      <Head>
        <title>Example</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <ThemeProvider theme={getTheme(themeType)}>
          <GlobalStyle />
          <Component {...customPageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default App
