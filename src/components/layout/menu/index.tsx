import React from 'react'

import type {FC} from 'react'

import {Path} from '@app/router'
import LinkComponent from '@components/parts/link'

import './style'

interface Props {
  visible: boolean
}

const Menu: FC<Props> = (props) => {
  return (
    <div
      id='menu'
      className={props.visible ? 'menu visible' : 'menu'}>
      <LinkComponent link={Path.SETTINGS}>Settings</LinkComponent>
      <LinkComponent link={Path.PRIVACY}>Privacy</LinkComponent>
      <div
        className='item'
        onClick={() => true}>
        Log out
      </div>
    </div>
  )
}

export default Menu
