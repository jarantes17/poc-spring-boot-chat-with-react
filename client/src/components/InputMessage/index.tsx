import React, { PropsWithChildren } from 'react'
import { Container } from './styles'

export interface IInputMessageProps extends PropsWithChildren {}

const InputMessage: React.FunctionComponent<IInputMessageProps> = (props) => {
  return <Container>Here is input message</Container>
}

export default InputMessage
