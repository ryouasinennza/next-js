import { VFC } from 'react'
import styled from 'styled-components'
import { useCounter } from './hooks'

type CounterProps = {
  countText: string
  upDownText: string
}

export const Counter: VFC<CounterProps> = ({ countText, upDownText }) => {
  const counter = useCounter()

  return (
    <Wrap>
      <Button onClick={counter.changeUpDown}>{upDownText}</Button>
      <Text>{counter.upDownState}!</Text>
      <Button onClick={counter.changeCount}>{countText}</Button>
      <Text>{counter.countState}!</Text>
    </Wrap>
  )
}

const Wrap = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 30px;
`

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
`

const Text = styled('span')`
  padding: 4px;
`
