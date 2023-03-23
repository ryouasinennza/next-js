type Grid = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52

export type Padding = [Grid, Grid?, Grid?, Grid?] | Grid | undefined

export const cssPaddingValue = (argument: Padding): string | undefined => {
  if (argument === undefined) {
    return undefined
  }

  if (typeof argument === 'number') {
    return `${argument}px`
  }

  return argument
    .map((value) => {
      return `${value}px`
    })
    .join(' ')
}
