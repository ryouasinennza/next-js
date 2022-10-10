import Head from 'next/head'
import { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { useLoginLogout } from './useLoginLogout'

type LayoutProps = {
  children: ReactElement
  title: string
}

export const Layout: FC<LayoutProps> = ({ children, title = 'Layouts Example' }) => {
  const { data } = useLoginLogout()

  console.log('Layout', data)
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header>Header{data ? 'logout' : 'login'}</Header>
      <main>{children}</main>
      <Footer>Footer</Footer>
    </>
  )
}

const Header = styled('header')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: ${({ theme }) => theme.colors.textColors.white};
  background-color: ${({ theme }) => theme.colors.background};
`

const Footer = styled('footer')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: ${({ theme }) => theme.colors.textColors.white};
  background-color: ${({ theme }) => theme.colors.background};
`
