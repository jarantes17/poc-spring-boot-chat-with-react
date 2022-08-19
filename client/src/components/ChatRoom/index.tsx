import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Client, over } from 'stompjs'
import SockJS from 'sockjs-client'
import { Container } from './styles'
import Header from '../Header'
import Users from '../Users'
import Conversation from '../Conversation'
import InputMessage from '../InputMessage'
import { User } from '../../model/types'
import Register from '../Register'

export interface IChatRoomProps extends PropsWithChildren {}

let stompClient: Client

const ChatRoom: React.FunctionComponent<IChatRoomProps> = () => {
  const [privateChats, setPrivateChats] = useState(new Map())
  const [publicChats, setPublicChats] = useState([])
  const [tab, setTab] = useState('CHATROOM')
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  })

  useEffect(() => {
    console.log(userData)
  }, [userData])

  const onRequestedJoin = (username: string) => {
    setUserData({
      ...userData,
      username
    })
    connect()
  }

  const onLeave = () => {
    setUserData({
      ...userData,
      username: '',
      connected: false
    })
  }

  const connect = () => {
    const Sock = new SockJS('http://localhost:8080/ws')
    stompClient = over(Sock)
    stompClient.connect({}, onConnected, onError)
  }

  const onConnected = () => {
    setUserData({
      ...userData,
      connected: true
    })
    stompClient.subscribe('/chatroom/public', onMessageReceived)
    stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessage)
    userJoin()
  }

  const onError = () => {}

  const onMessageReceived = (payload: any) => {
    const payloadData = JSON.parse(payload.body)
    switch (payloadData.status) {
      case 'JOIN':
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, [])
          setPrivateChats(new Map(privateChats))
        }
        break
      case 'MESSAGE':
        publicChats.push(payloadData as never)
        setPublicChats([...publicChats])
        break
    }
  }

  const onPrivateMessage = (payload: any) => {
    console.log(payload)
    const payloadData = JSON.parse(payload.body)
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData)
      setPrivateChats(new Map(privateChats))
    } else {
      const list = []
      list.push(payloadData)
      privateChats.set(payloadData.senderName, list)
      setPrivateChats(new Map(privateChats))
    }
  }

  const userJoin = () => {}

  return (
    <>
      {userData.connected ? (
        <Container>
          <Header onLeave={onLeave} />
          <Users
            users={
              [
                {
                  name: 'ankit',
                  slug: 'AN'
                },
                {
                  name: 'akash',
                  slug: 'AK'
                },
                {
                  name: 'komal',
                  slug: 'KO'
                },
                {
                  name: 'alake',
                  slug: 'AL'
                },
                {
                  name: 'arun',
                  slug: 'AR'
                }
              ] as User[]
            }
          />
          <Conversation />
          <InputMessage />
        </Container>
      ) : (
        <Register onRequestedJoin={onRequestedJoin} />
      )}
    </>
  )
}

export default ChatRoom
