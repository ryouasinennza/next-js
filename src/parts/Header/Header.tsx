import NextLink from 'next/link'
import { VFC } from 'react'
import styled from 'styled-components'

type HeaderProps = {
  title: string
}

export const Header: VFC<HeaderProps> = ({ title }) => {
  return (
    <HeaderMain>
      <Box>
        <NextLink href="/" passHref>
          <Link>{title}</Link>
        </NextLink>
      </Box>
    </HeaderMain>
  )
}

const HeaderMain = styled('header')`
  font-size: 20px;
  color: #fff;
  background-color: #20232a;
`

const Box = styled('div')`
  display: flex;
  align-items: center;
  max-width: 1260px;
  height: 60px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`

const Link = styled('a')`
  color: #fff;
`
