import NextLink from 'next/link'
import styled from 'styled-components'
import { Counter } from '../parts'
import { Layout } from '../parts/Layout'
// import { useLoginLogout } from '../parts/Layout/useLoginLogout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  // const { data } = useLoginLogout()
  // console.log('Page', data)
  return (
    <>
      <Wrap>
        <NextLink href="/getServerSideProps">getServerSideProps</NextLink>
        <NextLink href="/getStaticProps">getStaticProps</NextLink>
      </Wrap>
      <Counter countText="加算減算" upDownText="加算減算切替" />
    </>
  )
}

// layoutにすることによってページ移動時にLayout内のfetchが動かないmemo化？される
Home.getLayout = (page) => <Layout title="home">{page}</Layout>

export default Home

const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
`
