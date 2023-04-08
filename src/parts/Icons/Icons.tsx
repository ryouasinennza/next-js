import { FC } from 'react'
import { SvgComponents, svgComponents } from './svgComponents'

type Size = 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48

type IconsProps = {
  fill?: string
  iconName: keyof SvgComponents
  size?: Size
  transformRotate?: number
  transition?: string
}

export const Icons: FC<IconsProps> = ({ fill, iconName, size = 24, transformRotate = 0, transition = '0s' }) => {
  const Root = svgComponents[iconName]
  return (
    <Root
      fill={fill}
      height={size}
      style={{
        minHeight: size,
        minWidth: size,
        transform: `rotate(${transformRotate}deg)`,
        transition: transition,
      }}
      width={size}
    />
  )
}
