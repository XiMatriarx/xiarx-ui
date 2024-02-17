import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Privacy: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='privacy'>Privacy</div>
    </PageComponent>
  )
}

export default Privacy
