import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import AuthRoute from '@routes/auth'
import IndexRoute from '@routes/index'
import RegistrationRoute from '@routes/registration'
import LoginRoute from '@routes/login'
import ProfileRoute from '@routes/profile'
import HubRoute from '@routes/hub'
import LikesRoute from '@routes/likes'
import MatchesRoute from '@routes/matches'
import ChatRoute from '@routes/chat'
import SettingsRoute from '@routes/settings'
import PrivacyRoute from '@routes/privacy'

export enum Path {
  INDEX = '/',
  REGISTRATION = '/registration',
  LOGIN = '/login',
  PROFILE = '/profile',
  HUB = '/hub',
  LIKES = '/likes',
  MATCHES = '/matches',
  CHAT = '/chat',
  SETTINGS = '/settings',
  PRIVACY = '/privacy',
}

const router = createBrowserRouter([
  {
    path: Path.INDEX,
    element: <IndexRoute />,
  },
  {
    path: Path.REGISTRATION,
    element: <RegistrationRoute />,
  },
  {
    path: Path.LOGIN,
    element: <LoginRoute />,
  },
  {
    element: <AuthRoute />,
    children: [
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
      {
        path: Path.PRIVACY,
        element: <PrivacyRoute />,
      },
    ],
  },
])

export default router
