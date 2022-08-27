import React, { PropsWithChildren } from 'react'
import { User } from '../../model/types'
import * as S from './styles'
import UserList from './UserList'

export interface IUsersProps extends PropsWithChildren {
  users: User[]
  onChangeTab: (tab: string) => void
  selectedTab: string
}

const Users: React.FunctionComponent<IUsersProps> = ({ users, onChangeTab, selectedTab }) => {
  return (
    <S.Container>
      <S.Title>Users</S.Title>
      <UserList users={users} onChangeTab={onChangeTab} selectedTab={selectedTab} />
    </S.Container>
  )
}

export default Users
