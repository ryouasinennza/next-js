'use client'
import { useEffect, useState } from 'react'
import { createContext, FC, ReactNode, useContext } from 'react'
import useEffectOnce from 'react-use/lib/useEffectOnce'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

export const primitiveColors = {
  black: '#333',
  blue: '#3B72D8',
  gray: '#919191',
  green: '#11A6A1',
  red: '#D70015',
  white: '#fff',
} as const

const THEME_TYPES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const

type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES]

export type Theme = {
  background: {
    alert: string
    appBar: string
    disable: string
    hover: string
    primary: string
    secondary: string
  }
  border: {
    alert: string
    disable: string
    divider: string
    primary: string
    secondary: string
  }
  text: {
    alert: string
    disable: string
    link: string
    placeHolder: string
    primary: string
    secondary: string
    visited: string
  }
}

type ThemeColors = {
  dark: Theme
  light: Theme
}

export const themeColors: ThemeColors = {
  dark: {
    background: {
      alert: primitiveColors.red,
      appBar: primitiveColors.black,
      disable: primitiveColors.gray,
      hover: primitiveColors.white,
      primary: primitiveColors.black,
      secondary: primitiveColors.white,
    },
    border: {
      alert: primitiveColors.red,
      disable: primitiveColors.gray,
      divider: primitiveColors.gray,
      primary: primitiveColors.black,
      secondary: primitiveColors.white,
    },
    text: {
      alert: primitiveColors.red,
      disable: primitiveColors.gray,
      link: primitiveColors.blue,
      placeHolder: primitiveColors.gray,
      primary: primitiveColors.white,
      secondary: primitiveColors.black,
      visited: primitiveColors.red,
    },
  },
  light: {
    background: {
      alert: primitiveColors.red,
      appBar: primitiveColors.black,
      disable: primitiveColors.gray,
      hover: primitiveColors.white,
      primary: primitiveColors.white,
      secondary: primitiveColors.black,
    },
    border: {
      alert: primitiveColors.red,
      disable: primitiveColors.gray,
      divider: primitiveColors.gray,
      primary: primitiveColors.black,
      secondary: primitiveColors.white,
    },
    text: {
      alert: primitiveColors.red,
      disable: primitiveColors.gray,
      link: primitiveColors.blue,
      placeHolder: primitiveColors.gray,
      primary: primitiveColors.black,
      secondary: primitiveColors.white,
      visited: primitiveColors.red,
    },
  },
}

type GetTheme = (themeType: ThemeType) => Theme

const getTheme: GetTheme = (themeType = THEME_TYPES.LIGHT) =>
  themeType === THEME_TYPES.LIGHT ? themeColors.light : themeColors.dark

const LOCAL_STORAGE_KEY = 'next_js_theme'

type UseTheme = () => [ThemeType, () => void]

const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState<ThemeType>(THEME_TYPES.LIGHT)

  const setMode = (mode: ThemeType): void => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, mode)
    setTheme(mode)
  }

  const themeToggle = (): void => {
    theme === THEME_TYPES.LIGHT ? setMode(THEME_TYPES.DARK) : setMode(THEME_TYPES.LIGHT)
  }

  useEffectOnce(() => {
    const localTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (localTheme === THEME_TYPES.LIGHT || localTheme === THEME_TYPES.DARK) {
      localTheme && setTheme(localTheme)
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(THEME_TYPES.DARK)
        window.localStorage.setItem(LOCAL_STORAGE_KEY, THEME_TYPES.DARK)
      }
    }
  })
  return [theme, themeToggle]
}

type ThemeContextProps = {
  themeToggle: () => void
  themeType: ThemeType
}

const ThemeContext = createContext<ThemeContextProps>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  themeToggle: () => {},
  themeType: 'light',
})

type ThemeProviderProps = {
  children: ReactNode
  themeType?: ThemeType
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeType }) => {
  const [themeTypeState, themeToggle] = useTheme()
  useEffect(() => {
    if (themeTypeState === themeType) {
      themeToggle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeType])

  return (
    <>
      <ThemeContext.Provider value={{ themeToggle, themeType: themeTypeState }}>
        <StyledThemeProvider theme={getTheme(themeTypeState)}>
          <>
            <GlobalStyle />
            {children}
          </>
        </StyledThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export const useThemeContext = (): ThemeContextProps => useContext(ThemeContext)
