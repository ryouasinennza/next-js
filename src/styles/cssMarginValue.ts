type Grid = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52

type Value = Grid | 'auto'

export type Margin = [Value, Value?, Value?, Value?] | Grid | undefined

export const cssMarginValue = (argument: Margin): string | undefined => {
  if (argument === undefined) {
    return undefined
  }

  if (typeof argument === 'number') {
    return `${argument}px`
  }

  return argument
    .map((value) => {
      if (value === 'auto') {
        return value
      }
      return `${value}px`
    })
    .join(' ')
}
