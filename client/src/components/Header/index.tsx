import React, { PropsWithChildren } from 'react'
import * as S from './styles'
import { BasicButton } from '../../theme/GlobalStyle'
import { BiUser } from 'react-icons/bi'

export interface IChatRoomProps extends PropsWithChildren {
  onLeave: () => void
  username: string
}

const ChatRoom: React.FunctionComponent<IChatRoomProps> = ({ onLeave, username }) => {
  return (
    <S.Container>
      <S.Title>My Room</S.Title>
      <S.JoinedUser>
        <BiUser size={'20px'} />
        {username}
      </S.JoinedUser>
      <BasicButton onClick={onLeave}>LEAVE</BasicButton>
    </S.Container>
  )
}

export default ChatRoom
