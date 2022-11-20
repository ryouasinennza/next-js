export const devices = {
  desktop: '(min-width: 2560px)',
  laptop: '(min-width: 1024px)',
  laptopL: '(min-width: 1440px)',
  mobileL: '(min-width: 425px)',
  mobileM: '(min-width: 375px)',
  mobileS: '(min-width: 320px)',
  tablet: '(min-width: 768px)',
}

export const theme = {
  colors: {
    background: 'gray',
    primary: '#0070f3',
    textColors: {
      black: '#333',
      white: '#fff',
    },
  },
  devices,
}

export type Theme = typeof theme
