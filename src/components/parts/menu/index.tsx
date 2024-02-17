import React from 'react'

import type {FC} from 'react'

import LinkComponent from '@components/parts/link'

import './style'

interface Item {
  label: string
  link: string
}

interface Props {
  id?: string | undefined
  class?: string | undefined
  visible: boolean
  items: Item[]
}

const Menu: FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={
        ('menu' + props.visible ? 'visible' : 'menu') +
        (props.class ? ' ' + props.class : undefined)
      }>
      {props.items.map((item: Item) => {
        return <LinkComponent link={item.link}>{item.label}</LinkComponent>
      })}
    </div>
  )
}

export default Menu
