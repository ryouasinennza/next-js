import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { StyledComponentsRegistry } from '../lib/registry'
import { ThemeProvider } from '../styles/theme'
import { SWRConfig } from '../utils/SWRConfig'
import { eslintDisableConsole } from '../utils/eslintDisableConsole'

export const metadata: Metadata = {
  description: 'Welcome to Next.js',
  title: 'Home',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  eslintDisableConsole.log('RootLayout')
  return (
    <html lang="ja">
      <body>
        <SWRConfig>
          <ThemeProvider>
            <StyledComponentsRegistry>
              <header>herder</header>
              {children}
              <footer>footer</footer>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </SWRConfig>
      </body>
    </html>
  )
}

export default RootLayout
