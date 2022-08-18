import styled from 'styled-components'

export const Container = styled.div`
  grid-area: input;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const InputMessage = styled.input`
  border: none transparent;
  outline: none;
  font-size: 1.2rem;
  width: 100%;
`

export const SendButton = styled.button`
  border: none transparent;
  outline: none;
  font-size: 1rem;
  width: 75px;
  height: 50px;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: var(--bg-box);
    border-radius: 0 25px 25px 0;
  }
`
