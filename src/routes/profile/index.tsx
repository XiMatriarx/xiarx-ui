import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Profile: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='profile'>Profile</div>
    </PageComponent>
  )
}

export default Profile
