import { useState } from 'react'
import { useEffectOnce } from '../utils/useEffectOnce'

export const primitiveColors = {
  black: '#333',
  white: '#fff',
  gray: '#919191',
  green: '#11A6A1',
  blue: '#3B72D8',
  red: '#D70015',
} as const

const THEME_TYPES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const

type ThemeType = (typeof THEME_TYPES)[keyof typeof THEME_TYPES]

export type Theme = {
  background: {
    alert: string
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
      primary: primitiveColors.black,
      secondary: primitiveColors.white,
      visited: primitiveColors.red,
    },
  },
  light: {
    background: {
      alert: primitiveColors.red,
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
      primary: primitiveColors.black,
      secondary: primitiveColors.white,
      visited: primitiveColors.red,
    },
  },
}

type GetTheme = (themeType: ThemeType) => Theme

export const getTheme: GetTheme = (themeType = THEME_TYPES.LIGHT) =>
  themeType === THEME_TYPES.LIGHT ? themeColors.light : themeColors.dark

const LOCAL_STORAGE_KEY = 'next_js_theme'

type UseTheme = () => [ThemeType, () => void]

export const useTheme: UseTheme = () => {
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
