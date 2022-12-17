import { useState } from 'react'
import { useEffectOnce } from '../utils/useEffectOnce'

const lightTheme = {
  background: '#fff',
  border: '#363537',
  text: '#363537',
} as const

const darkTheme = {
  background: '#5e5e5e',
  border: '#FAFAFA',
  text: '#FAFAFA',
} as const

const THEME_TYPES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const

type ThemeType = typeof THEME_TYPES[keyof typeof THEME_TYPES]

type GetTheme = (themeType: ThemeType) => typeof lightTheme | typeof darkTheme

export const getTheme: GetTheme = (themeType = THEME_TYPES.LIGHT) =>
  themeType === THEME_TYPES.LIGHT ? lightTheme : darkTheme

export type Theme = {
  background: typeof lightTheme.background | typeof darkTheme.background
  border: typeof lightTheme.border | typeof darkTheme.border
  text: typeof lightTheme.text | typeof darkTheme.text
}

const LOCAL_STORAGE_KEY = 'style_theme'

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
