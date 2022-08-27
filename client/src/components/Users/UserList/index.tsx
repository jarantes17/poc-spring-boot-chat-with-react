import React, { PropsWithChildren } from 'react'
import { User } from '../../../model/types'
import UserItem from '../UserItem'
import * as S from './styles'

export interface IUserListProps extends PropsWithChildren {
  users: User[]
  onChangeTab: (tab: string) => void
  selectedTab: string
}

const UserList: React.FunctionComponent<IUserListProps> = ({ users, onChangeTab, selectedTab }) => {
  return (
    <S.Container>
      <UserItem
        user={{
          slug: 'CR',
          name: 'CHATROOM'
        }}
        key={'CR'}
        onChangeTab={onChangeTab}
        selectedTab={'CHATROOM'}
      />
      {users.map((user) => (
        <UserItem user={user} key={user.slug} onChangeTab={onChangeTab} selectedTab={selectedTab} />
      ))}
    </S.Container>
  )
}

export default UserList
