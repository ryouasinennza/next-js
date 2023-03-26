import { Property } from 'csstype'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Typography } from '../Typography'

type ButtonProps = {
  children: ReactNode
  maxWidth?: Property.MaxWidth
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, maxWidth, onClick }) => {
  return (
    <Root
      $maxWidth={maxWidth}
      onClick={onClick}
    >
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

const Root = styled.button<RootProps>(({ $maxWidth, theme }) => {
  return {
    alignItems: 'center',
    backgroundColor: theme.background.secondary,
    borderRadius: '1000px',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: $maxWidth,
    padding: '8px 16px',
    whiteSpace: 'nowrap',
    width: '100%',
  }
})
