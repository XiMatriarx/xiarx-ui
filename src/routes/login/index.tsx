import React, {useState} from 'react'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import {Path} from '@app/router'
import Header from '@components/parts/header'
import Loader from '@components/parts/loader'
import Input from '@components/parts/input'
import Button from '@components/parts/button'
import Link from '@components/parts/link'

import './style'

const Login: FC<RouteProps> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div id='login'>
      <div id='container'>
        <Header type={1}>Xi Arx</Header>
        <Header type={5}>The only 100% free dating app.</Header>
        <Loader />
        <div className='container'>
          <div className='input'>
            <div className='text'>Email</div>
            <Input
              type='text'
              value={email}
              focus={true}
              change={(value: string) => {
                setEmail(value)
              }}
            />
          </div>
          <div className='input'>
            <div className='text'>Password</div>
            <Input
              type='password'
              value={password}
              focus={true}
              change={(value: string) => {
                setPassword(value)
              }}
            />
          </div>
          <div className='buttons'>
            <Button click={() => {}}>Login</Button>
          </div>
        </div>
        <p>
          Don't have an account? <Link link={Path.REGISTRATION}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
