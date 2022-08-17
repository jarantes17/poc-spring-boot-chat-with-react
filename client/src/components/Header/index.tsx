import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import { BasicButton } from '../../theme/GlobalStyle'

export type IChatRoomProps = PropsWithChildren

const ChatRoom: React.FunctionComponent<IChatRoomProps> = (props) => {
  return (
    <S.Container>
      <S.Title>My Room</S.Title>
      <BasicButton>LEAVE</BasicButton>
    </S.Container>
  )
}

export default ChatRoom
