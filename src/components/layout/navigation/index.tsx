import React from 'react'
import {useLocation} from 'react-router-dom'

import type {FC} from 'react'

import {Path} from '@app/router'

import LinkComponent from '@components/parts/link'

import './style'

interface Props {}

const Navigation: FC<Props> = () => {
  const location = useLocation()

  return (
    <div id='navigation'>
      <LinkComponent
        class={location.pathname === Path.PROFILE ? 'active' : undefined}
        link={Path.PROFILE}>
        Profile
      </LinkComponent>
      <LinkComponent
        class={location.pathname === Path.HUB ? 'active' : undefined}
        link={Path.HUB}>
        Hub
      </LinkComponent>
      <LinkComponent
        class={location.pathname === Path.LIKES ? 'active' : undefined}
        link={Path.LIKES}>
        Likes
      </LinkComponent>
      <LinkComponent
        class={location.pathname === Path.MATCHES ? 'active' : undefined}
        link={Path.MATCHES}>
        Matches
      </LinkComponent>
      <LinkComponent
        class={location.pathname === Path.CHAT ? 'active' : undefined}
        link={Path.CHAT}>
        Chat
      </LinkComponent>
    </div>
  )
}

export default Navigation
