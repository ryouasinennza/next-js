import NextLink from 'next/link'
import { useState, VFC } from 'react'
import styled from 'styled-components'
import { OpenCloseButton } from '../OpenCloseButton'

type Props = {
  links: {
    text: string
    url: string
  }[]
}

export const SideBar: VFC<Props> = ({ links }) => {
  const [state, setState] = useState<boolean>(false)
  const handler = (): void => {
    setState(!state)
  }
  return (
    <SideBarPosition>
      <ItemsPosition open={state}>
        <Items>
          {links.map(({ text, url }) => {
            return (
              <Item key={text}>
                <NextLink href={url} passHref>
                  <a>{text}</a>
                </NextLink>
              </Item>
            )
          })}
        </Items>
      </ItemsPosition>
      <OpenCloseButton openCloseFlag={state} openCloseHandler={handler} />
    </SideBarPosition>
  )
}

const SideBarPosition = styled('div')`
  position: fixed;
  right: 12px;
  bottom: 28px;
`
const ItemsPosition = styled('aside')<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }): number | string => (open ? 0 : '-100vw')};
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 80%);
  transition: 0.3s;
`

const Items = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Item = styled('li')`
  a {
    font-size: 20px;
    color: #fff;
  }
`
