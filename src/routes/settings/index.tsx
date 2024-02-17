import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'

import './style'

const Settings: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='settings'>Settings</div>
    </PageComponent>
  )
}

export default Settings
