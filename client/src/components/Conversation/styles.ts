import styled from 'styled-components'

export const Container = styled.div`
  grid-area: conversation;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ChatMessageLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const UserSlug = styled.div`
  display: block;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 25px;
  font-weight: 600;
`

interface DialogProps {
  self: boolean
}

export const Dialog = styled.div<DialogProps>`
  display: block;
  color: ${(props) => (props.self ? 'var(--white)' : 'var(--black)')};
  background-color: ${(props) => (props.self ? 'var(--blue)' : 'var(--white)')};
  padding: 16px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => (props.self ? '25px 25px 0 25px' : '25px 25px 25px 0')};
  width: fit-content;
  max-width: 50%;
  align-self: ${(props) => (props.self ? 'flex-end' : 'flex-start')};

  & > span {
    float: ${(props) => (props.self ? 'right' : 'left')};
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
