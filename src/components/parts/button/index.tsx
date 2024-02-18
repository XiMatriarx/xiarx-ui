import React from 'react'

import type {FC, ReactNode} from 'react'

import './style'

interface Props {
  id?: string | undefined
  class?: string | undefined
  children?: ReactNode | undefined
  click: () => void
}

const Button: FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={props.class ? 'button ' + props.class : 'button'}
      onClick={() => props.click()}>
      {props.children}
    </div>
  )
}

export default Button
