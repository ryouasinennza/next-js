'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  )
}
