'use client'
import { Flex, Text } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import useSWR from 'swr'

type ClientComponentProps = {
  children: ReactNode
}

export const ClientComponent: FC<ClientComponentProps> = ({ children }) => {
  const { data, error, isLoading } = useSWR('/api/getName')

  return (
    <Flex direction="column">
      <Text fontSize="md">{children}</Text>
      {error && <div>failed to load</div>}
      {isLoading && <div>loading...</div>}
      {data && <div>{data.name}</div>}
    </Flex>
  )
}
