import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Matches: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='matches'>Matches</div>
    </PageComponent>
  )
}

export default Matches
