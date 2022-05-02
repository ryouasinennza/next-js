import NextLink from 'next/link'
import { VFC } from 'react'
import styled from 'styled-components'

type link = {
  text: string
  url: string
}

type Links = { links: link[] }

type FooterProps = {
  copyright: string
  siteName: string
} & Links

const Links: VFC<Links> = ({ links }) => {
  return (
    <Items>
      {links.map(({ url, text }) => (
        <Item key={`${url}-${text}`}>
          <NextLink href={url} passHref>
            <a>{text}</a>
          </NextLink>
        </Item>
      ))}
    </Items>
  )
}

export const Footer: VFC<FooterProps> = ({ copyright, siteName, links }) => {
  return (
    <FooterMain>
      <FooterContainer>
        {links.length > 0 && <Links links={links} />}
        <div>
          <div>{siteName}</div>
          <div>{copyright}</div>
        </div>
      </FooterContainer>
    </FooterMain>
  )
}

const FooterMain = styled('footer')`
  padding: 50px 0 60px;
  color: #fff;
  background-color: #20232a;
`

const FooterContainer = styled('div')`
  max-width: 1260px;
  padding-right: 20px;
  padding-left: 20px;
  margin: 0 auto;
`

const Items = styled('ul')`
  margin: 20px 0;
`

const Item = styled('li')`
  a {
    font-size: 20px;
    color: #fff;
  }
`
