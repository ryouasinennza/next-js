import { VFC } from 'react'
import styled from 'styled-components'

type OpenCloseButtonProps = {
  openCloseFlag: boolean
  openCloseHandler: () => void
}

export const OpenCloseButton: VFC<OpenCloseButtonProps> = ({ openCloseFlag, openCloseHandler }) => {
  return (
    <Button open={openCloseFlag} onClick={openCloseHandler}>
      <span />
      <span />
      <span />
    </Button>
  )
}

const Button = styled('button')<{ open: boolean }>`
  position: relative;
  width: 34px;
  height: 30px;
  cursor: pointer;
  background-color: ${({ open }): string => (open ? '#666' : '#333')};
  border-radius: 5px;

  span {
    position: absolute;
    left: 5px;
    display: inline-block;
    width: 24px;
    height: 2px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.4s;
  }

  span:nth-of-type(1) {
    top: 8px;
    transform: ${({ open }): string => (open ? 'translateY(6px) rotate(-45deg)' : 'none')};
  }

  span:nth-of-type(2) {
    top: 14px;
    opacity: ${({ open }): number => (open ? 0 : 1)};
  }

  span:nth-of-type(3) {
    top: 20px;
    transform: ${({ open }): string => (open ? 'translateY(-6px) rotate(45deg)' : 'none')};
  }
`
