import React from 'react'

import type {FC, ReactNode} from 'react'

import './style'

interface Props {
  id?: string | undefined
  class?: string | undefined
  children?: ReactNode
  type: 1 | 2 | 3 | 4 | 5 | 6
}

const Header: FC<Props> = (props) => {
  switch (props.type) {
    case 1:
      return (
        <h1
          id={props.id}
          className={props.class}>
          {props.children}
        </h1>
      )
    case 2:
      return (
        <h2
          id={props.id}
          className={props.class}>
          {props.children}
        </h2>
      )
    case 3:
      return (
        <h3
          id={props.id}
          className={props.class}>
          {props.children}
        </h3>
      )
    case 4:
      return (
        <h4
          id={props.id}
          className={props.class}>
          {props.children}
        </h4>
      )
    case 5:
      return (
        <h5
          id={props.id}
          className={props.class}>
          {props.children}
        </h5>
      )
    case 6:
      return (
        <h6
          id={props.id}
          className={props.class}>
          {props.children}
        </h6>
      )
  }
}

export default Header
