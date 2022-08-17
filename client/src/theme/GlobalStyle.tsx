import styled, { createGlobalStyle } from 'styled-components'

// universal styles
export default createGlobalStyle`

  :root {
    --bg-body: #2255be;
    --bg-primary-button: #2255be;
    --bg-box: #f4f6ff;
    --white: #fff;
  }

  body {
    overflow: hidden;
    font-family: "Poppins", serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
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
