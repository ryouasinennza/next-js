import { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import { getPagePath, GetPagePathReturn } from '../lib'

type Props = {
  pages: GetPagePathReturn
}

const pages = getPagePath()

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: { pages },
  }
}

const Page: NextPage = () => {
  return (
    <About>
      <h1>contact example</h1>
    </About>
  )
}

export default Page

const About = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px 0;
`
