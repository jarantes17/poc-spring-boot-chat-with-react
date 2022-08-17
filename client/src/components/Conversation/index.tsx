import React, { PropsWithChildren } from 'react'
import { Container } from './styles'

export interface IConversationProps extends PropsWithChildren {}

const Conversation: React.FunctionComponent<IConversationProps> = (props) => {
  return <Container>Here is conversation</Container>
}

export default Conversation
