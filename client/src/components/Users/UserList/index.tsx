import React, { PropsWithChildren } from 'react'
import { User } from '../../../model/types'
import UserItem from '../UserItem'
import * as S from './styles'

export interface IUserListProps extends PropsWithChildren {
  users: User[]
}

const UserList: React.FunctionComponent<IUserListProps> = ({ users }) => {
  return (
    <S.Container>
      {users.map((user) => (
        <UserItem user={user} key={user.slug} />
      ))}
    </S.Container>
  )
}

export default UserList
