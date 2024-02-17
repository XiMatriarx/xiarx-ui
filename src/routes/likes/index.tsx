import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Likes: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='likes'>Likes</div>
    </PageComponent>
  )
}

export default Likes
