import { Property } from 'csstype'
import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { cssMarginValue, Margin } from '../../utils/cssMarginValue'
import { cssPaddingValue, Padding } from '../../utils/cssPaddingValue'

type Grid = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52

type GridBoxProps = {
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

export const GridBox: FC<GridBoxProps> = ({
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
    $alignItems = 'flex-start',
    $itemLength,
    $justifyContent = 'flex-start',
    $margin,
    $maxWidth = 'unset',
    $minMax,
    $padding,
    $repeatType,
    $spacing = 0,
    $width = '100%',
  }) => {
    const repeat = $repeatType ? `auto-${$repeatType}` : $itemLength
    const minMax = $minMax ? `minmax(${$minMax})` : `100%`

    return {
      gridTemplateColumns: `repeat(${repeat}, ${minMax})`,
      display: 'grid',
      margin: cssMarginValue($margin),
      padding: cssPaddingValue($padding),
      width: $width,
      maxWidth: $maxWidth,
      gap: `${$spacing}px`,
      justifyContent: $justifyContent,
      alignItems: $alignItems,
    }
  }
)
