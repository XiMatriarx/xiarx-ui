import React from 'react'

import type {FC, ReactNode} from 'react'

import './style'

interface Props {
  id?: string | undefined
  class?: string | undefined
  children?: ReactNode | undefined
  link: string
}

const Link: FC<Props> = (props) => {
  return (
    <a
      id={props.id}
      className={props.class}
      href={props.link}>
      {props.children}
    </a>
  )
}

export default Link
