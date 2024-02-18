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

const Registration: FC<RouteProps> = () => {
  const [step, setStep] = useState(1)
  const [text, setText] = useState<string>('What is your email?')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')

  return (
    <div id='registration'>
      <div id='container'>
        <Header type={1}>Xi Arx</Header>
        <Header type={5}>The only 100% free dating app.</Header>
        <Loader />
        <Header type={6}>Registration</Header>
        {step === 1 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <Input
                type='text'
                value={email}
                change={(value: string) => {
                  setEmail(value)
                }}
              />
            </div>
            <div className='buttons'>
              <Button
                click={() => {
                  if (!email) {
                    setText('A valid email is required.')
                  } else {
                    setStep(2)
                    setText('What is your password?')
                  }
                }}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <Input
                type='password'
                value={password}
                change={(value: string) => {
                  setPassword(value)
                }}
              />
            </div>
            <div className='buttons'>
              <Button
                click={() => {
                  setStep(1)
                  setText('What is your email?')
                }}>
                Back
              </Button>
              <Button
                click={() => {
                  if (!password) {
                    setText('A password is required.')
                  } else {
                    setStep(3)
                    setText('What is your name?')
                  }
                }}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <Input
                type='text'
                value={name}
                change={(value: string) => {
                  setName(value)
                }}
              />
            </div>
            <div className='buttons'>
              <Button
                click={() => {
                  setStep(2)
                  setText('What is your password?')
                }}>
                Back
              </Button>
              <Button
                click={() => {
                  if (!name) {
                    setText('A name is required.')
                  } else {
                    setStep(3)
                    setText('What is your name?')
                  }
                }}>
                Next
              </Button>
            </div>
          </div>
        )}
        <p>
          Already have an account? <Link link={Path.LOGIN}>Log in</Link>{' '}
          instead.
        </p>
      </div>
    </div>
  )
}

export default Registration
