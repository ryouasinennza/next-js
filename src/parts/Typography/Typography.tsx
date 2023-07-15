import { FC, ReactNode, memo } from 'react'
import styled from 'styled-components'
import { cssMarginValue, Margin } from '../../styles/cssMarginValue'
import { Theme } from '../../styles/theme'

export const fontWeight = {
  bold: 600,
  medium: 500,
  regular: 400,
} as const

type FontVariantKeys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption1' | 'overline1'

type FontVariant = {
  [key in FontVariantKeys]: {
    element: keyof JSX.IntrinsicElements
    fontSize: number
    fontWeight: number
    letterSpacing: string
    lineHeight: string | number
  }
}

export const fontVariant: FontVariant = {
  body1: {
    element: 'p',
    fontSize: 16,
    fontWeight: fontWeight.regular,
    letterSpacing: 'normal',
    lineHeight: 1.5,
  },
  body2: {
    element: 'p',
    fontSize: 14,
    fontWeight: fontWeight.regular,
    letterSpacing: 'normal',
    lineHeight: 1.5,
  },
  caption1: {
    element: 'span',
    fontSize: 12,
    fontWeight: fontWeight.regular,
    letterSpacing: 'normal',
    lineHeight: 1.5,
  },
  h1: {
    element: 'h1',
    fontSize: 40,
    fontWeight: fontWeight.bold,
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  h2: {
    element: 'h2',
    fontSize: 32,
    fontWeight: fontWeight.bold,
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  h3: {
    element: 'h3',
    fontSize: 24,
    fontWeight: fontWeight.regular,
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  h4: {
    element: 'h4',
    fontSize: 20,
    fontWeight: fontWeight.bold,
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  h5: {
    element: 'h5',
    fontSize: 18,
    fontWeight: fontWeight.bold,
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  h6: {
    element: 'h6',
    fontSize: 16,
    fontWeight: fontWeight.bold,
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  overline1: {
    element: 'span',
    fontSize: 10,
    fontWeight: fontWeight.medium,
    letterSpacing: 'normal',
    lineHeight: 1.5,
  },
} as const

type TextColorKey = keyof Theme['text']

type VariantPropKeys = keyof typeof fontVariant

type TypographyProps = {
  children: ReactNode
  className?: string | undefined
  color?: TextColorKey
  elementType?: keyof JSX.IntrinsicElements
  letterSpacing?: string
  lineHeight?: string | number
  margin?: Margin
  noWrap?: boolean
  variant: VariantPropKeys
}

export const Typography: FC<TypographyProps> = memo(function TypographyComponent({
  children,
  className,
  color,
  elementType,
  letterSpacing,
  lineHeight,
  margin,
  noWrap,
  variant,
}) {
  return (
    <Root
      $color={color}
      $letterSpacing={letterSpacing}
      $lineHeight={lineHeight}
      $margin={margin}
      $noWrap={noWrap}
      $variant={variant}
      as={elementType || fontVariant[variant].element}
      className={className}
    >
      {children}
    </Root>
  )
})

type ElementProps = {
  $color?: TextColorKey
  $letterSpacing?: string
  $lineHeight?: string | number
  $margin: Margin
  $noWrap?: boolean
  $variant: VariantPropKeys
}

const Root = styled.div<ElementProps>(
  ({ $color = 'primary', $letterSpacing, $lineHeight, $margin, $noWrap, $variant, theme }) => {
    return {
      color: theme.text[$color],
      fontSize: `${fontVariant[$variant].fontSize}px`,
      fontWeight: fontVariant[$variant].fontWeight,
      letterSpacing: $letterSpacing ?? fontVariant[$variant].letterSpacing,
      lineHeight: $lineHeight ?? fontVariant[$variant].lineHeight,
      margin: cssMarginValue($margin),
      whiteSpace: $noWrap ? 'nowrap' : 'unset',
    }
  },
)
