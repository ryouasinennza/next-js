import { useState } from 'react'

type UseCounterState = number

type Argument = {
  initialCount: UseCounterState
}

type UseCounter = ({ initialCount }: Argument) => {
  count: number
  downCountHandler: () => void
  upCountHandler: () => void
}

export const useCounter: UseCounter = ({ initialCount }) => {
  const [state, setState] = useState<UseCounterState>(initialCount)

  const upCountHandler = (): void => {
    const count = state + 1
    setState(count)
  }
  const downCountHandler = (): void => {
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
