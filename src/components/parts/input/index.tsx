import React from 'react'

import type {FC} from 'react'

import './style'

interface Props {
  id?: string | undefined
  class?: string | undefined
  type: 'text' | 'password'
  value: string
  change: (value: string) => void
}

const Input: FC<Props> = (props) => {
  return (
    <input
      id={props.id}
      className={props.class}
      type={props.type}
      value={props.value}
      onChange={(event) => props.change(event.target.value)}
    />
  )
}

export default Input
