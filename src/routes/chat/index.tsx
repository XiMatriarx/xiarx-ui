import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Chat: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='chat'>Chat</div>
    </PageComponent>
  )
}

export default Chat
