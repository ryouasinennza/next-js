'use client'
import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useHelloWorld } from '../../graphql/hooks/useHelloWorld/useHelloWorld'

const Home: NextPage = () => {
  const { data } = useHelloWorld()

  return (
    <Flex
      direction="column"
      gap={4}
    >
      {data?.helloWorld.message}
    </Flex>
  )
}

export default Home
