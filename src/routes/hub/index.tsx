import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Hub: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='hub'>Hub</div>
    </PageComponent>
  )
}

export default Hub
