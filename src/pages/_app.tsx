import { AppProps } from 'next/app'
import Error from 'next/error'
import Head from 'next/head'
import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Footer, Header, SideBar } from '../parts'
import { GlobalStyle, theme } from '../style'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  if (!pageProps.pages) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>Example blog</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ComponentWrap>
          <Header title="Example blog" />
          <SideBar links={pageProps.pages} />
          <ContentWrap>
            <Component {...pageProps} />
          </ContentWrap>
          <Footer
            copyright="Copyright © 2022 Example Inc. All Rights Reserved."
            siteName="Example blog"
            links={pageProps.pages}
          />
        </ComponentWrap>
      </ThemeProvider>
    </>
  )
}

export default App

const ComponentWrap = styled('div')`
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100vh;
`

const ContentWrap = styled('main')`
  flex: 1;
  width: 100%;
  max-width: 1260px;
  padding: 0 8px;
  margin: 0 auto 120px;
  img {
    max-width: 100%;
  }
`
