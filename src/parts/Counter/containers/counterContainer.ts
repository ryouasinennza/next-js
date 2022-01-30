import { format } from 'date-fns'
type CounterContainer = () => {
  count: number
}

export const counterContainer: CounterContainer = () => {
  const count = format(new Date(), 'dd')
  return {
    count: Number(count),
  }
}
