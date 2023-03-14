import { Property } from 'csstype'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Typography } from '../Typography/Typography'

type ButtonProps = {
  children: ReactNode
  maxWidth?: Property.MaxWidth
}

export const Button: FC<ButtonProps> = ({ children, maxWidth }) => {
  return (
    <Root $maxWidth={maxWidth}>
      <Typography
        elementType="span"
        lineHeight={1}
        variant="body1"
      >
        {children}
      </Typography>
    </Root>
  )
}

type RootProps = {
  $maxWidth?: Property.MaxWidth
}

const Root = styled.button<RootProps>(({ $maxWidth = 'unset', theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: $maxWidth,
    width: '100%',
    padding: '8px 16px',
    whiteSpace: 'nowrap',
    backgroundColor: theme.background.secondary,
    borderRadius: '1000px',
  }
})
