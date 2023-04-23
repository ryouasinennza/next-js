import { FC, SVGProps } from 'react'
import Car from '../../../public/svgs/car.svg'
import Euro from '../../../public/svgs/euro.svg'

type SvgComponent = FC<SVGProps<SVGElement>>

export type SvgComponents = {
  car: SvgComponent
  euro: SvgComponent
}

export type SvgComponentsKeys = keyof SvgComponents

export const svgComponents: SvgComponents = {
  car: Car,
  euro: Euro,
}

export const svgComponentsKeys = Object.keys(svgComponents) as (keyof SvgComponents)[]
