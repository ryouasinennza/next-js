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
  justifyContent?: Property.JustifyContent
  margin?: Margin
  maxWidth?: Property.MaxWidth
  minMax?: string
  padding?: Padding
  repeatType?: 'fill' | 'fit' | number
  spacing?: Grid
  style?: CSSProperties
  width?: string
}

export const GridLayout: FC<GridLayoutProps> = ({
  alignItems,
  children,
  className,
  justifyContent,
  margin,
  maxWidth,
  minMax,
  padding,
  repeatType,
  spacing,
  width,
}) => {
  return (
    <Root
      $alignItems={alignItems}
      $itemLength={Array.isArray(children) ? children.length : 1}
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
  $itemLength: number
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
    $itemLength,
    $justifyContent,
    $margin,
    $maxWidth,
    $minMax,
    $padding,
    $repeatType,
    $spacing,
    $width,
  }) => {
    const repeat = $repeatType ? `auto-${$repeatType}` : $itemLength
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
  }
)
