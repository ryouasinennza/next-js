import { Property } from 'csstype'
import { CSSProperties, FC, ReactNode } from 'react'
import styled from 'styled-components'
import { cssMarginValue, Margin } from '../../styles/cssMarginValue'
import { cssPaddingValue, Padding } from '../../styles/cssPaddingValue'
import { Theme } from '../../styles/theme'

type Grid = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52

type FlexLayoutProps = {
  alignItems?: Property.AlignItems
  backgroundColor?: keyof Theme['background']
  children: ReactNode
  className?: string
  direction?: Property.FlexDirection
  elementType?: keyof JSX.IntrinsicElements
  flex?: Property.Flex
  height?: Property.Width
  justifyContent?: Property.JustifyContent
  margin?: Margin
  maxWidth?: Property.MaxWidth
  minHeight?: Property.MinHeight
  padding?: Padding
  spacing?: Grid
  style?: CSSProperties
  width?: Property.Width | true
  wrap?: Property.FlexWrap
}

export const FlexLayout: FC<FlexLayoutProps> = ({
  alignItems,
  backgroundColor,
  children,
  className,
  direction,
  elementType,
  flex,
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
      $backgroundColor={backgroundColor}
      $direction={direction}
      $flex={flex}
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
  $backgroundColor?: keyof Theme['background']
  $direction?: Property.FlexDirection
  $flex?: Property.Flex
  $height?: Property.Width
  $justifyContent?: Property.JustifyContent
  $margin?: Margin
  $maxWidth?: Property.MaxWidth
  $minHeight?: Property.MinHeight
  $padding?: Padding
  $spacing?: Grid
  $width?: Property.Width | true
  $wrap?: Property.FlexWrap
}

const Root = styled.div<RootProps>(
  ({
    $alignItems,
    $backgroundColor,
    $direction,
    $flex,
    $height,
    $justifyContent,
    $margin,
    $maxWidth,
    $minHeight,
    $padding,
    $spacing,
    $width,
    $wrap,
    theme,
  }) => {
    const width = $width === true ? '100%' : $width

    return {
      alignItems: $alignItems,
      backgroundColor: $backgroundColor && theme.background[$backgroundColor],
      display: 'flex',
      flex: $flex,
      flexDirection: $direction,
      flexWrap: $wrap,
      gap: $spacing ? `${$spacing}px` : undefined,
      height: $height,
      justifyContent: $justifyContent,
      margin: cssMarginValue($margin),
      maxWidth: $maxWidth,
      minHeight: $minHeight,
      padding: cssPaddingValue($padding),
      position: 'relative',
      width,
    }
  }
)
