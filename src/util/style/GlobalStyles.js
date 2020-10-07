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
  @keyframes fadeUpIn {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`

export default GlobalStyles
