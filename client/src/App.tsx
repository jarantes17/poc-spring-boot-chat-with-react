import React from 'react'
import GlobalStyle from './theme/GlobalStyle'
import MainLayout from './components/patterns/layouts/MainLayout'
import ChatRoom from './components/ChatRoom'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <ChatRoom />
      </MainLayout>
    </>
  )
}

export default App
