import React from 'react'
import {Outlet} from 'react-router-dom'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

const Profile: FC<RouteProps> = () => {
  return <Outlet />
}

export default Profile
