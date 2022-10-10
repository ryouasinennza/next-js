import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { GlobalStyle, theme } from '../style'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

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
        <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default App
