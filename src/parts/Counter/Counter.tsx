import { FC } from 'react'
import { CounterComponent } from '@/parts/Counter/components'
import { counterContainer } from '@/parts/Counter/containers'
import { useCounter } from '@/parts/Counter/hooks'

export const Counter: FC = () => {
  const componentProps = counterContainer()
  const hooksProps = useCounter({
    initialCount: componentProps.count,
  })
  return <CounterComponent {...{ ...componentProps, ...hooksProps }} />
}
