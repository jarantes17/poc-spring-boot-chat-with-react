import React, { PropsWithChildren } from 'react'
import { Container } from './styles'

export interface IUserListProps extends PropsWithChildren {}

const UserList: React.FunctionComponent<IUserListProps> = (props) => {
  return <Container></Container>
}

export default UserList
