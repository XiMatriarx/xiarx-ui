import React from 'react'

import type {FC, ReactNode} from 'react'

import HeaderComponent from '@components/layout/header'
import NavigationComponent from '@components/layout/navigation'

import './style'

interface Props {
  children?: ReactNode | undefined
}

const Page: FC<Props> = (props) => {
  return (
    <div id='page'>
      <HeaderComponent />
      <NavigationComponent />
      <div id='content'>{props.children}</div>
    </div>
  )
}

export default Page
