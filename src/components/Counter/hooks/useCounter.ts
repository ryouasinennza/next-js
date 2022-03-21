import { format } from 'date-fns'
import { useState } from 'react'
import { useEffectOnce } from '../../../lib'

type UseCounterState = number

type UseCounterReturnType = {
  count: number
  downCountHandler: () => void
  upCountHandler: () => void
}

type UseCounter = (initialCount?: number) => UseCounterReturnType

export const useCounter: UseCounter = (initialCount) => {
  const [state, setState] = useState<UseCounterState>(initialCount === undefined ? 0 : initialCount)

  useEffectOnce(() => {
    if (initialCount === undefined) {
      const count = format(new Date(), 'dd')
      setState(Number(count))
    }
  })

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
