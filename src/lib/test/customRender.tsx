import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ReactNode, VFC, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style'

type AllTheProvidersProps = {
  children: ReactNode
}

const AllTheProviders: VFC<AllTheProvidersProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

type CustomRender = (ui: ReactElement, options?: RenderOptions) => RenderResult

export const customRender: CustomRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })
