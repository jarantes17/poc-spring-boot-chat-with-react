import React, { PropsWithChildren } from 'react'
import { Container } from './styles'

export interface IUserItemProps extends PropsWithChildren {}

const UserItem: React.FunctionComponent<IUserItemProps> = (props) => {
  return <Container></Container>
}

export default UserItem
