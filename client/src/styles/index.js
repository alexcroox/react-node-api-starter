// Our css reset and any other global styles
import styledSanitize from 'styled-sanitize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  ${styledSanitize}

  body {
    color: #666;
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Helvetica", "Arial", sans-serif;
  }
`
