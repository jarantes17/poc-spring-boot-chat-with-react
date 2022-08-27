import React, { PropsWithChildren } from 'react'
import { BiSend } from 'react-icons/bi'
import * as S from './styles'

export interface IInputMessageProps extends PropsWithChildren {
  selectedTab: string
  sendPublicMessage: () => void
  sendPrivateMessage: () => void
  handleMessage: (event: any) => void
  message: string
}

const InputMessage: React.FunctionComponent<IInputMessageProps> = ({
  selectedTab,
  sendPublicMessage,
  sendPrivateMessage,
  handleMessage,
  message
}) => {
  async function sendMessage() {
    if (selectedTab === 'CHATROOM') {
      sendPublicMessage()
      console.log('sended a public message')
    } else {
      sendPrivateMessage()
      console.log('sended a private message')
    }
  }

  return (
    <S.Container>
      <S.InputMessage
        placeholder={'Write your message here'}
        value={message}
        onChange={handleMessage}
      />
      <S.SendButton type={'button'} onClick={sendMessage}>
        <BiSend size={'36px'} />
      </S.SendButton>
    </S.Container>
  )
}

export default InputMessage
