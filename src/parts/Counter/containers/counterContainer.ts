import { format } from 'date-fns'
import { CounterComponentProps } from '@/parts/Counter/components'
type CounterContainer = () => Omit<CounterComponentProps, 'upCountHandler' | 'downCountHandler'>

export const counterContainer: CounterContainer = () => {
  const count = format(new Date(), 'dd')
  return {
    count: Number(count),
    name: 'day',
  }
}
