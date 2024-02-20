import React from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import PageComponent from '@components/layout/page'
import Avatar from '@components/parts/avatar'
import User from '@static/images/user.svg'

import './style'

const Profile: FC<RouteProps> = () => {
  return (
    <PageComponent>
      <div id='profile'>
        <div id='info'>
          <div id='avatar'>
            <Avatar src={User} />
          </div>
          <div id='detail'>
            <div className='name'>Salkadj Jlajdal</div>
            <div className='info'>
              <div className='age'>30</div>
              <div>-</div>
              <div className='location'>Fksjdlkasjd</div>
            </div>
            <div className='items'>
              <div className='item'>dfgsdfgdfg,</div>
              <div className='item'>adsfdsdf,</div>
              <div className='item'>dfgsdfgf,</div>
              <div className='item'>dfgsdfg,</div>
              <div className='item'>sfdgasdfgf,</div>
              <div className='item'>dfhsdfg,</div>
              <div className='item'>ghdfhfgh,</div>
              <div className='item'>asdads</div>
            </div>
          </div>
        </div>
        <div id='about'></div>
      </div>
    </PageComponent>
  )
}

export default Profile
