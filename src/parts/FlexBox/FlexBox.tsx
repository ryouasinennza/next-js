import { Property } from 'csstype'
import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { cssMarginValue, Margin } from '../../utils/cssMarginValue'
import { cssPaddingValue, Padding } from '../../utils/cssPaddingValue'

type Grid = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52

type FlexBoxProps = {
  alignItems?: Property.AlignItems
  children: ReactNode
  className?: string
  direction?: Property.FlexDirection
  elementType?: keyof JSX.IntrinsicElements
  height?: string
  justifyContent?: Property.JustifyContent
  margin?: Margin
  maxWidth?: Property.MaxWidth
  minHeight?: Property.MinHeight
  padding?: Padding
  spacing?: Grid
  style?: CSSProperties
  width?: string
  wrap?: Property.FlexWrap
}

export const FlexBox: FC<FlexBoxProps> = ({
  alignItems,
  children,
  className,
  direction,
  elementType,
  height,
  justifyContent,
  margin,
  maxWidth,
  minHeight,
  padding,
  spacing,
  style,
  width,
  wrap,
}) => {
  return (
    <Root
      $alignItems={alignItems}
      $direction={direction}
      $height={height}
      $justifyContent={justifyContent}
      $margin={margin}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      $padding={padding}
      $spacing={spacing}
      $width={width}
      $wrap={wrap}
      as={elementType}
      className={className}
      style={style}
    >
      {children}
    </Root>
  )
}

type RootProps = {
  $alignItems?: Property.AlignItems
  $direction?: Property.FlexDirection
  $height?: string
  $justifyContent?: Property.JustifyContent
  $margin?: Margin
  $maxWidth?: Property.MaxWidth
  $minHeight?: Property.MinHeight
  $padding?: Padding
  $spacing?: Grid
  $width?: string
  $wrap?: Property.FlexWrap
}

const Root = styled.div<RootProps>(
  ({
    $alignItems = 'flex-start',
    $direction = 'column',
    $height,
    $justifyContent = 'flex-start',
    $margin,
    $maxWidth = 'unset',
    $minHeight = 'unset',
    $padding,
    $spacing = 0,
    $width = '100%',
    $wrap = 'nowrap',
  }) => {
    return {
      position: 'relative',
      alignItems: $alignItems,
      display: 'flex',
      flexFlow: `${$direction} ${$wrap}`,
      gap: `${$spacing}px`,
      height: `${$height}`,
      justifyContent: $justifyContent,
      margin: cssMarginValue($margin),
      maxWidth: $maxWidth,
      minHeight: $minHeight,
      padding: cssPaddingValue($padding),
      width: $width,
    }
  }
)
