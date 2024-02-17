import React, {useState} from 'react'

import type {FC} from 'react'

import {Path} from '@app/router'

import HeaderComponent from '@components/parts/header'
import AvatarComponent from '@components/parts/avatar'
import MenuComponent from '@components/parts/menu'

import User from '@static/images/user.svg'

import './style'

interface Props {}

const Header: FC<Props> = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div id='header'>
      <HeaderComponent type={1}>Xi Arx</HeaderComponent>
      <AvatarComponent
        src={User}
        click={() => {
          setMenuVisible(!menuVisible)
        }}
      />
      <MenuComponent
        visible={menuVisible}
        items={[
          {
            label: 'Settings',
            link: Path.SETTINGS,
          },
        ]}
      />
    </div>
  )
}

export default Header
