import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import { BasicButton } from '../../theme/GlobalStyle'

export interface IChatRoomProps extends PropsWithChildren {
  onLeave: () => void
}

const ChatRoom: React.FunctionComponent<IChatRoomProps> = ({ onLeave }) => {
  return (
    <S.Container>
      <S.Title>My Room</S.Title>
      <BasicButton onClick={onLeave}>LEAVE</BasicButton>
    </S.Container>
  )
}

export default ChatRoom
