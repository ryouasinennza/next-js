'use client'
import { FC, ReactNode } from 'react'
import { SWRConfig as SWRConfigProvider } from 'swr'

type SWRConfigProps = {
  children: ReactNode
}

const fetcher = (url: string): Promise<unknown> => fetch(url).then((res) => res.json())

export const SWRConfig: FC<SWRConfigProps> = ({ children }) => {
  return <SWRConfigProvider value={{ fetcher }}>{children}</SWRConfigProvider>
}
