import React, { PropsWithChildren } from 'react'
import { BiSend } from 'react-icons/bi'
import * as S from './styles'

export interface IInputMessageProps extends PropsWithChildren {}

const InputMessage: React.FunctionComponent<IInputMessageProps> = (props) => {
  return (
    <S.Container>
      <S.InputMessage placeholder={'Write your message here'} />
      <S.SendButton>
        <BiSend size={'36px'} />
      </S.SendButton>
    </S.Container>
  )
}

export default InputMessage
