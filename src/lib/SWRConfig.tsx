'use client'
import { FC, ReactNode } from 'react'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { GraphqlClientConfig } from '../graphql/graphqlClient'

type SWRConfigProps = {
  children: ReactNode
}

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

GraphqlClientConfig.setEndpoint('http://localhost:3000/api/graphql')
export const SWRConfig: FC<SWRConfigProps> = ({ children }) => {
  return <SWRConfigProvider value={{ fetcher }}>{children}</SWRConfigProvider>
}
