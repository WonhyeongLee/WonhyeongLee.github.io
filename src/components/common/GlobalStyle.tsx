import { css, Global } from '@emotion/react'
import React from 'react'
const defaultStyle = css`
  * {
    font-size: 32px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html,
  body,
  div #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: React.FC = () => {
  return <Global styles={defaultStyle} />
}
export default GlobalStyle
