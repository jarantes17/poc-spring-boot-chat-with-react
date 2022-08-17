import React, { PropsWithChildren } from 'react'
import { User } from '../../../model/types'
import * as S from './styles'

export interface IUserItemProps extends PropsWithChildren {
  user: User
}

const UserItem: React.FunctionComponent<IUserItemProps> = ({ user }) => {
  return (
    <S.Container>
      <S.UserLink href="#">
        <S.UserContent>
          <S.UserSlug>{user.slug}</S.UserSlug>
          <S.UserName>{user.name}</S.UserName>
        </S.UserContent>
      </S.UserLink>
    </S.Container>
  )
}

export default UserItem
