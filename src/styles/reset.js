import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  *:before, *:after {
    box-sizing: inherit;
  }

  li {
    list-style-type: none;
  }
`
