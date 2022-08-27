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
  const [privateChats, setPrivateChats] = useState(new Map<string, any>())
  const [publicChats, setPublicChats] = useState([])
  const [users, setUsers] = useState([] as User[])
  const [tab, setTab] = useState('CHATROOM')
  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  })

  useEffect(() => {
    console.log('userData', userData)
  }, [userData])

  useEffect(() => {
    renderJoinedUsers()
  }, [privateChats])

  const renderJoinedUsers = () => {
    const joinedUsers = [] as User[]
    for (const entry of Array.from(privateChats.entries())) {
      if (entry[0].length > 0) {
        joinedUsers.push({
          name: entry[0],
          slug: entry[0].substring(0, 2).toUpperCase()
        })
      }
    }
    setUsers(joinedUsers)
  }

  const handleUsername = (event: any) => {
    const { value } = event.target
    setUserData({
      ...userData,
      username: value
    })
  }

  const handleMessage = (event: any) => {
    const { value } = event.target
    setUserData({
      ...userData,
      message: value
    })
  }

  const registerUser = () => {
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
    console.log('onPublicMessage', payload)
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

  const userJoin = () => {
    const chatMessage = {
      senderName: userData.username,
      status: 'JOIN'
    }
    console.log()
    stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
  }

  const sendPublicMessage = () => {
    if (stompClient) {
      const chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: 'MESSAGE'
      }
      stompClient.send('/app/message', {}, JSON.stringify(chatMessage))
      setUserData({
        ...userData,
        message: ''
      })
    }
  }

  const sendPrivateMessage = () => {
    if (stompClient) {
      const chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: 'MESSAGE'
      }

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage)
        setPrivateChats(new Map(privateChats))
      }
      stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage))
      setUserData({
        ...userData,
        message: ''
      })
    }
  }

  return (
    <>
      {userData.connected ? (
        <Container>
          <Header onLeave={onLeave} />
          <Users users={users} onChangeTab={setTab} selectedTab={tab} />
          <Conversation
            publicChats={publicChats}
            privateChats={privateChats}
            selectedTab={tab}
            username={userData.username}
          />
          <InputMessage
            selectedTab={tab}
            sendPublicMessage={sendPublicMessage}
            sendPrivateMessage={sendPrivateMessage}
            message={userData.message}
            handleMessage={handleMessage}
          />
        </Container>
      ) : (
        <Register
          username={userData.username}
          handleUsername={handleUsername}
          registerUser={registerUser}
        />
      )}
    </>
  )
}

export default ChatRoom
