import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    font-size: 16px;
    margin: 0;
  }
  .tc-i {
    color: white;
  }
  .tdn {
    text-decoration: none;
  }
  .tl-wrapper-status--entered {
    transform: none !important;
  }
`

export default GlobalStyles
