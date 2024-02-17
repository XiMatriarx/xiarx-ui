import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Index: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='index'>Index</div>
    </PageComponent>
  )
}

export default Index
