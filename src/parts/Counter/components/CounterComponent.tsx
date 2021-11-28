import { FC } from 'react'
import styled from 'styled-components'

export type CounterComponentProps = {
  count: number
  downCountHandler: () => void
  name: string
  upCountHandler: () => void
}

export const CounterComponent: FC<CounterComponentProps> = ({
  count,
  name,
  upCountHandler,
  downCountHandler,
}) => {
  return (
    <CounterBox>
      <Name>{name}</Name>
      <Row>
        <Counter>{count}</Counter>
        <UpButton onClick={upCountHandler}>UP</UpButton>
        <DownButton onClick={downCountHandler}>DOWN</DownButton>
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

const Counter = styled('div')`
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

const UpButton = styled('button')`
  width: 150px;
  height: 50px;
  padding: 8px;
  margin: 8px;
  font-size: 16px;
`

const DownButton = styled('button')`
  width: 150px;
  height: 50px;
  padding: 8px;
  margin: 8px;
  font-size: 16px;
`