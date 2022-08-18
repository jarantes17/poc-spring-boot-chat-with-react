import React, { PropsWithChildren } from 'react'
import { FiSend } from 'react-icons/fi'
import * as S from './styles'

export interface IInputMessageProps extends PropsWithChildren {}

const InputMessage: React.FunctionComponent<IInputMessageProps> = (props) => {
  return (
    <S.Container>
      <S.InputMessage placeholder={'Write your message here'} />
      <S.SendButton>
        <FiSend size={'24px'} />
      </S.SendButton>
    </S.Container>
  )
}

export default InputMessage
