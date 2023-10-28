import { useState } from 'react'

type UseCount = () => {
  count: number
  increment: () => void
}

export const useCount: UseCount = () => {
  const [count, setCount] = useState(0)
  const increment = (): void => {
    setCount(count + 1)
  }
  return { count, increment }
}
