import { VFC } from 'react'
import styled from 'styled-components'
import { counterContainer } from './containers'
import { useCounter } from './hooks'

type CounterProps = {
  name: string
}

export const Counter: VFC<CounterProps> = ({ name }) => {
  const componentProps = counterContainer()
  const { count, upCountHandler, downCountHandler } = useCounter({
    initialCount: componentProps.count,
  })

  return (
    <CounterBox>
      <Name>{name}</Name>
      <Row>
        <CounterDisplay>{count}</CounterDisplay>
        <Button onClick={upCountHandler}>UP</Button>
        <Button onClick={downCountHandler}>DOWN</Button>
      </Row>
    </CounterBox>
  )
}

const CounterBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`

const Name = styled('div')`
  display: flex;
  justify-content: center;
  font-size: 24px;
`

const Row = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`

const CounterDisplay = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 8px;
  margin: 16px;
  font-size: 32px;
  border: 2px solid #000;
  border-radius: 4px;
`

const Button = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  padding: 8px;
  margin: 8px;
  font-size: 28px;
  border: 2px solid #000;
  border-radius: 4px;
`
