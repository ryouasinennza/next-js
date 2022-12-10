import { NextPage } from 'next'

export type CustomNextPage<T = Record<string, never>> = NextPage<
  T & {
    changeTheme: () => void
  }
>
