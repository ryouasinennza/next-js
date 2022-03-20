import Head from 'next/head'
import { Counter, counterContainer, useCounter } from '../components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const componentProps = counterContainer()
  const { count, upCountHandler, downCountHandler } = useCounter({
    initialCount: componentProps.count,
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter name="example" count={count} upCountHandler={upCountHandler} downCountHandler={downCountHandler} />
    </>
  )
}

export default Home
