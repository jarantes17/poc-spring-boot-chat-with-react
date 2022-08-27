import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 480px;
  padding: 36px;
  background-color: var(--white);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
`

export const FormUser = styled.div`
  grid-area: input;
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const InputUser = styled.input`
  border: none transparent;
  outline: none;
  font-size: 1.2rem;
  width: 100%;
  background-color: var(--bg-box);
  padding: 20px;
  border-radius: 25px 25px 25px 25px;
`

export const LoginButton = styled.button`
  border: none transparent;
  outline: none;
  width: 75px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: var(--white);

  &:hover {
    cursor: pointer;
  }
`
