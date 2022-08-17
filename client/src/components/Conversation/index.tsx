import React, { PropsWithChildren } from 'react'
import * as S from './styles'

export interface IConversationProps extends PropsWithChildren {}

const Conversation: React.FunctionComponent<IConversationProps> = (props) => {
  return (
    <S.Container>
      <S.DialogLeft>
        <S.DialogContent>Short Text</S.DialogContent>
        <S.DialogTime>21:04</S.DialogTime>
      </S.DialogLeft>
      <S.DialogRight>
        <S.DialogContent>This is a bit long long text</S.DialogContent>
        <S.DialogTime>09:10</S.DialogTime>
      </S.DialogRight>
    </S.Container>
  )
}

export default Conversation
