import { createGlobalStyle } from 'styled-components'
import 'ress/dist/ress.min.css'

export const GlobalStyle = createGlobalStyle`
  
  html {
    font-size: 14px;
  }
  
  body {
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background.primary};
  }
  
  a {
    text-decoration: none;
  }

  ul,li {
    margin: 0;
    list-style: none;
  }
  
`
