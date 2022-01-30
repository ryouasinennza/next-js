import { format } from 'date-fns'
type CounterContainer = () => {
  count: number
  name: string
}

export const counterContainer: CounterContainer = () => {
  const count = format(new Date(), 'dd')
  return {
    count: Number(count),
    name: 'day',
  }
}
