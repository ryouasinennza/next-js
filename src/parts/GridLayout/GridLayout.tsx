import { Property } from 'csstype'
import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { cssMarginValue, Margin } from '../../styles/cssMarginValue'
import { cssPaddingValue, Padding } from '../../styles/cssPaddingValue'

type Grid = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52

type GridLayoutProps = {
  alignItems?: Property.AlignItems
  children: ReactNode
  className?: string
  columnsLength?: number
  justifyContent?: Property.JustifyContent
  margin?: Margin
  maxWidth?: Property.MaxWidth
  minMax?: string
  padding?: Padding
  repeatType?: 'fill' | 'fit'
  spacing?: Grid
  style?: CSSProperties
  width?: string
}

export const GridLayout: FC<GridLayoutProps> = ({
  alignItems,
  children,
  className,
  columnsLength,
  justifyContent,
  margin,
  maxWidth,
  minMax,
  padding,
  repeatType,
  spacing,
  width,
}) => {
  const childrenLength = Array.isArray(children) ? children.length : 1
  const length = columnsLength ?? childrenLength

  return (
    <Root
      $alignItems={alignItems}
      $columnsLength={length}
      $justifyContent={justifyContent}
      $margin={margin}
      $maxWidth={maxWidth}
      $minMax={minMax}
      $padding={padding}
      $repeatType={repeatType}
      $spacing={spacing}
      $width={width}
      className={className}
    >
      {children}
    </Root>
  )
}

type RootProps = {
  $alignItems?: Property.AlignItems
  $columnsLength: number
  $justifyContent?: Property.JustifyContent
  $margin?: Margin
  $maxWidth?: Property.MaxWidth
  $minMax?: string
  $padding?: Padding
  $repeatType?: 'fill' | 'fit' | number
  $spacing?: Grid
  $width?: string
}

const Root = styled.div<RootProps>(
  ({
    $alignItems,
    $columnsLength,
    $justifyContent,
    $margin,
    $maxWidth,
    $minMax,
    $padding,
    $repeatType,
    $spacing,
    $width,
  }) => {
    const repeat = $repeatType ? `auto-${$repeatType}` : $columnsLength
    const minMax = $minMax ? `minmax(${$minMax})` : `100%`

    return {
      alignItems: $alignItems,
      display: 'grid',
      gap: $spacing ? `${$spacing}px` : undefined,
      gridTemplateColumns: `repeat(${repeat}, ${minMax})`,
      justifyContent: $justifyContent,
      margin: cssMarginValue($margin),
      maxWidth: $maxWidth,
      padding: cssPaddingValue($padding),
      width: $width,
    }
  },
)
