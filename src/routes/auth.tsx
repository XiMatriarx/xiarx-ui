import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import {Path} from '@app/router'
import {useAuth} from '@context/auth'
import Loader from '@components/parts/loader'

const Profile: FC<RouteProps> = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (!auth.token) {
      navigate(Path.REGISTRATION)
    }
  }, [])
  console.log(auth.token)
  return auth.token ? <Outlet /> : <Loader />
}

export default Profile
