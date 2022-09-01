import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  outline: boolean
  text: string
}

export const Button: FC<Props> = ({ text, outline }) => {
  return <ButtonBody outline={outline}>{text}</ButtonBody>
}

const ButtonBody = styled('button')<{ outline: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 30px;
  border: ${({ outline }) => (outline ? '1px solid #000' : 'none')};
`
