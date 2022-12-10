export const devices = {
  pc: '(min-width: 1000px)',
  sp: '(min-width: 320px)',
}

const lightTheme = {
  colors: {
    background: '#fff',
    border: '#363537',
    text: '#363537',
  },
  devices,
  themeType: 'light',
} as const

const darkTheme = {
  colors: {
    background: '#5e5e5e',
    border: '#FAFAFA',
    text: '#FAFAFA',
  },
  devices,
  themeType: 'dark',
} as const

type GetTheme = (theme: 'light' | 'dark') => typeof lightTheme | typeof darkTheme

export const getTheme: GetTheme = (theme) => (lightTheme.themeType === theme ? lightTheme : darkTheme)

export type Theme = {
  colors: {
    background: typeof lightTheme.colors.background | typeof darkTheme.colors.background
    border: typeof lightTheme.colors.border | typeof darkTheme.colors.border
    text: typeof lightTheme.colors.text | typeof darkTheme.colors.text
  }
  devices: typeof devices
  themeType: 'light' | 'dark'
}
