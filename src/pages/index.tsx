import { NextPage } from 'next'
import NextLink from 'next/link'
import styled from 'styled-components'
import { Counter } from '../parts'

const Home: NextPage = () => {
  return (
    <>
      <Wrap>
        <NextLink href="/getServerSideProps">
          <a>getServerSideProps</a>
        </NextLink>
        <NextLink href="/getStaticProps">
          <a>getStaticProps</a>
        </NextLink>
      </Wrap>
      <Counter countText="加算減算" upDownText="加算減算切替" />
    </>
  )
}

export default Home

const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
`
