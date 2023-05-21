'use client'
import { FC, ReactNode } from 'react'
import useSWR from 'swr'
import { FlexLayout } from '../../parts/FlexLayout'
import { Typography } from '../../parts/Typography'

type ClientComponentProps = {
  children: ReactNode
}

export const ClientComponent: FC<ClientComponentProps> = ({ children }) => {
  const { data, error, isLoading } = useSWR('/api/getName')

  return (
    <FlexLayout direction="column">
      <Typography variant="body1">{children}</Typography>
      {error && <div>failed to load</div>}
      {isLoading && <div>loading...</div>}
      {data && <div>{data.name}</div>}
    </FlexLayout>
  )
}
