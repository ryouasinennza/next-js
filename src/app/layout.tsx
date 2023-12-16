import { Metadata } from 'next'
import { FC, ReactNode } from 'react'
import { SWRConfig } from '../lib/SWRConfig'
import { Providers } from '../lib/providers'
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
          <Providers>{children}</Providers>
        </SWRConfig>
      </body>
    </html>
  )
}

export default RootLayout
