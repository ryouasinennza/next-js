'use client'
import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      gap={4}
    >
      <NextLink href={'/loading-example'}>loading-example</NextLink>
      <NextLink href={'/e2e-example'}>e2e-example</NextLink>
    </Flex>
  )
}

export default Home
