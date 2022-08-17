import styled, { createGlobalStyle } from 'styled-components'

// universal styles
export default createGlobalStyle`

  :root {
    --bg-body: #2255be;
    --bg-primary-button: #2255be;
    --bg-box: #f4f6ff;
    --white: #fff;
    --blue: #2255be;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  
  body {
    overflow: hidden;
    font-family: "Poppins", serif;
  }
`
// common components
export const BasicButton = styled.button`
  outline: none;
  border: none;
  width: 100px;
  height: 45px;
  border-radius: 25px;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-primary-button);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;

  :last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`