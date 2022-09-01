import { NextPage } from 'next'
// import NextLink from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
// import { Counter } from '../parts'

type Props = {
  text: string
}

const Button: FC<Props> = (props) => {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Text>aaaa</Text>
      <Button text="ボタン１" />
    </div>
  )

  // return (
  //   <>
  //     <Wrap>
  //       <NextLink href="/getServerSideProps">
  //         <a>getServerSideProps</a>
  //       </NextLink>
  //       <NextLink href="/getStaticProps">
  //         <a>getStaticProps</a>
  //       </NextLink>
  //     </Wrap>
  //     <Counter countText="加算減算" upDownText="加算減算切替" />
  //   </>
  // )
}

export default Home

const Text = styled('div')`
  font-size: 30px;
`

// localhost:3000/
