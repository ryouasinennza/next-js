import { createGlobalStyle } from 'styled-components'
import 'ress/dist/ress.min.css'

export const GlobalStyle = createGlobalStyle`
  * {
    color:${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }
  
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
