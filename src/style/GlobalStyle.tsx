import { createGlobalStyle } from 'styled-components'
import 'ress/dist/ress.min.css'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  ul,li {
    margin: 0;
    list-style: none;
  }
`
