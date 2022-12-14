import React, { PropsWithChildren } from 'react'
import format from 'date-fns/esm/format'
import * as S from './styles'

export interface IConversationProps extends PropsWithChildren {
  publicChats: any[]
  privateChats: Map<string, any>
  selectedTab: string
  username: string
}

const Conversation: React.FunctionComponent<IConversationProps> = ({
  publicChats,
  privateChats,
  selectedTab,
  username
}) => {
  const formatSlug = (name: string) => {
    return name.substring(0, 2).toUpperCase()
  }

  return (
    <S.Container>
      {selectedTab === 'CHATROOM' && (
        <>
          {publicChats.map((chat: any, index) => (
            <S.ChatMessageLine
              className={`${
                chat.senderName === username
                  ? 'dialog-right start-right-animation '
                  : 'dialog-left start-left-animation'
              }`}
              key={index}
            >
              {chat.senderName !== username && (
                <S.UserSlug>{formatSlug(chat.senderName)}</S.UserSlug>
              )}
              <S.Dialog self={chat.senderName === username}>
                <S.DialogContent>{chat.message}</S.DialogContent>
                <S.DialogTime>{format(new Date(), 'HH:mm')}</S.DialogTime>
              </S.Dialog>
              {chat.senderName === username && (
                <S.UserSlug>{formatSlug(chat.senderName)}</S.UserSlug>
              )}
            </S.ChatMessageLine>
          ))}
        </>
      )}
      {selectedTab !== 'CHATROOM' && (
        <>
          {[...privateChats.get(selectedTab)].map((chat, index) => (
            <S.ChatMessageLine
              className={`${
                chat.senderName === username
                  ? 'dialog-right start-right-animation '
                  : 'dialog-left start-left-animation'
              }`}
              key={index}
            >
              {chat.senderName !== username && (
                <S.UserSlug>{formatSlug(chat.senderName)}</S.UserSlug>
              )}
              <S.Dialog self={chat.senderName === username}>
                <S.DialogContent>{chat.message}</S.DialogContent>
                <S.DialogTime>{format(new Date(), 'HH:mm')}</S.DialogTime>
              </S.Dialog>
              {chat.senderName === username && (
                <S.UserSlug>{formatSlug(chat.senderName)}</S.UserSlug>
              )}
            </S.ChatMessageLine>
          ))}
        </>
      )}
    </S.Container>
  )
}

export default Conversation
