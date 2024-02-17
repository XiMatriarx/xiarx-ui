import React, {useState} from 'react'

import type {FC} from 'react'

import MenuComponent from '@components/layout/menu'
import HeaderComponent from '@components/parts/header'
import AvatarComponent from '@components/parts/avatar'

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
        click={() => setMenuVisible(!menuVisible)}
      />
      <MenuComponent visible={menuVisible} />
    </div>
  )
}

export default Header
