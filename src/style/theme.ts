export const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export const sizes = {
  desktop: '2560px',
  laptop: '1024px',
  laptopL: '1440px',
  mobileL: '425px',
  mobileM: '375px',
  mobileS: '320px',
  tablet: '768px',
}

export const devices = {
  desktop: `(min-width: ${sizes.desktop})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileS: `(min-width: ${sizes.mobileS})`,
  tablet: `(min-width: ${sizes.tablet})`,
}

export type Theme = typeof theme
