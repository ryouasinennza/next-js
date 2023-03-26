import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { ThemeProvider } from '../styles/theme'
import { SWRConfig } from '../utils/SWRConfig'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Example</title>
        <meta
          content="width=device-width"
          name="viewport"
        />
        <meta
          content="blog"
          name="description"
        />
        <link
          href="/favicon.ico"
          rel="icon"
        />
      </Head>
      <SWRConfig>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default App
