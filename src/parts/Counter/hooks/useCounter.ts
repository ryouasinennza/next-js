import { useState } from 'react'
import { CounterComponentProps } from '@/parts/Counter/components'

type UseCounterState = number

type Argument = {
  initialCount: UseCounterState
}

type UseCounter = ({ initialCount }: Argument) => Omit<CounterComponentProps, 'name'>

export const useCounter: UseCounter = ({ initialCount }) => {
  const [state, setState] = useState<UseCounterState>(initialCount)

  const upCountHandler = () => {
    const count = state + 1
    setState(count)
  }
  const downCountHandler = () => {
    if (!state) return
    const count = state - 1
    setState(count)
  }
  return {
    count: state,
    downCountHandler,
    upCountHandler,
  }
}
