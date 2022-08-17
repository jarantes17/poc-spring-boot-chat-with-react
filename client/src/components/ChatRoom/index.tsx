import React, { PropsWithChildren } from 'react'
import { Container } from './styles'
import Header from '../Header'
import Users from '../Users'
import Conversation from '../Conversation'
import InputMessage from '../InputMessage'
import { User } from '../../model/types'

export interface IChatRoomProps extends PropsWithChildren {}

const ChatRoom: React.FunctionComponent<IChatRoomProps> = (props) => {
  return (
    <Container>
      <Header />
      <Users
        users={
          [
            {
              name: 'ankit',
              slug: 'AN'
            },
            {
              name: 'akash',
              slug: 'AK'
            },
            {
              name: 'komal',
              slug: 'KO'
            },
            {
              name: 'alake',
              slug: 'AL'
            },
            {
              name: 'arun',
              slug: 'AR'
            }
          ] as User[]
        }
      />
      <Conversation />
      <InputMessage />
    </Container>
  )
}

export default ChatRoom
