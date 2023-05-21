'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { useState, ReactNode, FC } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

type StyledComponentsRegistryProps = {
  children: ReactNode
}

export const StyledComponentsRegistry: FC<StyledComponentsRegistryProps> = ({ children }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
}
