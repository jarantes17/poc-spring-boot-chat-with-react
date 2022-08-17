import React, { PropsWithChildren } from 'react'
import { User } from '../../model/types'
import * as S from './styles'
import UserList from './UserList'

export interface IUsersProps extends PropsWithChildren {
  users: User[]
}

const Users: React.FunctionComponent<IUsersProps> = (props) => {
  return (
    <S.Container>
      <S.Title>Users</S.Title>
      <UserList users={props.users} />
    </S.Container>
  )
}

export default Users
