import styled from 'styled-components'

export const Container = styled.div`
  grid-area: conversation;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const DialogRight = styled.div`
  display: block;
  color: var(--white);
  background-color: var(--blue);
  padding: 16px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px 25px 0 25px;
  width: fit-content;
  max-width: 50%;
  align-self: flex-end;

  .start-animation {
    transform: translateX(-100%);
    animation: slide-in 0.5s forwards;
  }

  & > span {
    float: right;
  }
`

export const DialogLeft = styled.div`
  display: block;
  background-color: var(--white);
  padding: 16px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 25px 25px 25px 0;
  width: fit-content;
  max-width: 50%;
  align-self: flex-start;

  .start-animation {
    transform: translateX(-100%);
    animation: slide-out 0.5s forwards;
  }

  & > span {
    float: left;
  }
`

export const DialogTime = styled.span`
  font-size: 0.7rem;
  opacity: 0.7;
  margin-top: 8px;
`

export const DialogContent = styled.p`
  font-weight: 500;
  line-height: 20px;
`
