import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import {Path} from '@app/router'

import './style'

const Index: FC<RouteProps> = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(Path.REGISTRATION)
  }, [])

  return <></>
}

export default Index
