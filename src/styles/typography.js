import { injectGlobal } from 'styled-components'
import { font } from './fonts'
import { spacing } from './spacings'
import { breakpoint } from './breakpoints'
import { color } from './colors'


injectGlobal`
  @font-face {
    font-family: 'MaisonNeue-Demi';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/MaisonNeue-Demi.woff2') format('woff2'),
      url('/fonts/MaisonNeue-Demi.woff') format('woff');
  }

  @font-face {
    font-family: 'MaisonNeue-Book';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/MaisonNeue-Book.woff2') format('woff2'),
      url('/fonts/MaisonNeue-Book.woff') format('woff');
  }

  body,
  html {
    font-family: ${font.fontRegular};
    color: ${color.colorPrimary};
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 22px;
    font-family: ${font.fontMedium};
    color: ${color.colorPrimary};
    font-style: normal;
    font-weight: normal;

    @media screen and (min-width: ${breakpoint.bpTablet}) {
      font-size: 32px;
    }
  }

  h2 {
    width: 100%;
    height: 25px;
    border-bottom: 2px solid;
    font-size: 16px;
    font-family: ${font.fontMedium};
    color: ${color.colorPrimary};
    margin: ${spacing.spacingMd} 0 ${spacing.spacingSm} 0;
    font-style: normal;
    font-weight: normal;

    @media screen and (min-width: ${breakpoint.bpTablet}) {
      font-size: 16px;
    }
  }

  h3 {
    font-size: 16px;
    font-family: ${font.fontMedium};
    color: ${color.colorPrimary};
    margin: 8px 0;
    font-style: normal;
    font-weight: normal;

    @media screen and (min-width: ${breakpoint.bpTablet}) {
      font-size: 16px;
    }
  }

  h4 {
    font-size: 22px;
    font-family: ${font.fontMedium};
    color: ${color.colorPrimary};
    margin: 0;
    font-style: normal;
    font-weight: normal;

    @media screen and (min-width: ${breakpoint.bpTablet}) {
      font-size: 32px;
    }
  }

  h5 {
    font-size: 22px;
    font-family: ${font.fontMedium};
    color: ${color.colorPrimary};
    margin: 0;
    font-style: normal;
    font-weight: normal;

    @media screen and (min-width: ${breakpoint.bpTablet}) {
      font-size: 32px;
    }
  }

  h6 {
    font-size: 22px;
    font-family: ${font.fontMedium};
    color: ${color.colorPrimary};
    margin: 0;
    font-style: normal;
    font-weight: normal;

    @media screen and (min-width: ${breakpoint.bpTablet}) {
      font-size: 32px;
    }
  }

  p {
    font-size: 14px;
    font-family: ${font.fontRegular};
    color: ${color.colorPrimary};
    line-height: 2em;
  }

  a {
    text-decoration: none;
    font-size: 14px;
    font-family: ${font.fontRegular};
    color: ${color.colorPrimary};
    transition: color 0.2s ease-out;

    &:hover {
      color: ${color.colorOrange};
    }
  }

  li {
    font-size: 14px;
    font-family: ${font.fontRegular};
    color: ${color.colorPrimary};
  }

  span {
    font-size: 16px;
    font-family: ${font.fontRegular};
    color: ${color.colorPrimary};
  }
`
