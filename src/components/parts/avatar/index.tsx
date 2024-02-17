import React from 'react'

import type {FC} from 'react'

import './style'

interface Props {
  id?: string | undefined
  class?: string | undefined
  click?: () => void | undefined
  src: string
}

const Avatar: FC<Props> = (props) => {
  return (
    <div
      id={props.id}
      className={props.class ? 'avatar ' + props.class : 'avatar'}
      onClick={props.click}>
      <img src={props.src} />
    </div>
  )
}

export default Avatar
