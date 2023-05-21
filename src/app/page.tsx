'use client'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { FlexLayout } from '../parts/FlexLayout'

const Home: NextPage = () => {
  return (
    <FlexLayout direction="column">
      <NextLink href={'/loading-example'}>loading-example</NextLink>
    </FlexLayout>
  )
}

export default Home
