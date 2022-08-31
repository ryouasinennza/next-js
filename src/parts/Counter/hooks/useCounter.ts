import { useState } from 'react'

type CountState = number
type ChangeCount = () => void

type UpDownState = 'up' | 'down'
type ChangeUpDown = () => void

type UseCounterReturn = {
  changeCount: ChangeCount
  changeUpDown: ChangeUpDown
  countState: CountState
  upDownState: UpDownState
}

type UseCounter = () => UseCounterReturn

export const useCounter: UseCounter = () => {
  const [countState, setCountState] = useState<CountState>(0)
  const [upDownState, setUpDownState] = useState<UpDownState>('up')

  const changeCount = (): void => {
    if (upDownState === 'up') {
      setCountState(countState + 1)
    } else {
      setCountState(countState - 1)
    }
  }

  const changeUpDown = (): void => {
    setUpDownState(upDownState === 'up' ? 'down' : 'up')
  }

  return { changeCount, changeUpDown, countState, upDownState }
}
