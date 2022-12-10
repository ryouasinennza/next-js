import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { getTheme, GlobalStyle } from '../style'

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const changeTheme = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const customPageProps = { ...pageProps, changeTheme: changeTheme }

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
        <ThemeProvider theme={getTheme(theme)}>
          <GlobalStyle />
          <Component {...customPageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default App
