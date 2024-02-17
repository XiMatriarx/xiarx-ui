import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import IndexRoute from '@routes/index'
import ProfileRoute from '@routes/profile'
import HubRoute from '@routes/hub'
import LikesRoute from '@routes/likes'
import MatchesRoute from '@routes/matches'
import ChatRoute from '@routes/chat'
import SettingsRoute from '@routes/settings'

export enum Path {
  INDEX = '/',
  PROFILE = '/profile',
  HUB = '/hub',
  LIKES = '/likes',
  MATCHES = '/matches',
  CHAT = '/chat',
  SETTINGS = '/settings',
}

const router = createBrowserRouter([
  {
    path: Path.INDEX,
    element: <IndexRoute />,
  },
  {
    path: Path.PROFILE,
    element: <ProfileRoute />,
  },
  {
    path: Path.HUB,
    element: <HubRoute />,
  },
  {
    path: Path.LIKES,
    element: <LikesRoute />,
  },
  {
    path: Path.MATCHES,
    element: <MatchesRoute />,
  },
  {
    path: Path.CHAT,
    element: <ChatRoute />,
  },
  {
    path: Path.SETTINGS,
    element: <SettingsRoute />,
  },
])

export default router
