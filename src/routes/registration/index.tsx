import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import type {FC} from 'react'
import type {RouteProps} from 'react-router-dom'

import {Path} from '@app/router'
import {useAuth} from '@context/auth'
import Header from '@components/parts/header'
import Loader from '@components/parts/loader'
import Input from '@components/parts/input'
import Button from '@components/parts/button'
import Link from '@components/parts/link'
import {validateEmail} from '@utilities/regex'

import './style'

const Registration: FC<RouteProps> = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const [step, setStep] = useState(1)
  const [text, setText] = useState<string>('What is your email?')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [sex, setSex] = useState<string>('woman')
  const [sexes, setSexes] = useState<{[key: string]: boolean}>({
    women: sex === 'man' || sex === 'non-binary',
    men: sex === 'woman' || sex === 'non-binary',
    nonbinary: sex === 'non-binary',
  })
  const [interest, setInterest] = useState<{[key: string]: boolean}>({
    friendship: true,
    sex: true,
    casual: true,
    serious: true,
  })

  useEffect(() => {
    if (auth.token) {
      navigate(Path.PROFILE)
    }
  }, [])

  return (
    <div id='registration'>
      <div id='container'>
        <Header type={1}>Xi Arx</Header>
        <Header type={5}>The only 100% free dating app.</Header>
        <Loader />
        {step === 1 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <Input
                type='text'
                value={email}
                focus={true}
                change={(value: string) => {
                  setEmail(value)
                }}
              />
            </div>
            <div className='buttons'>
              <Button
                id='register'
                click={() => {
                  if (!validateEmail(email)) {
                    setText('A valid email is required.')
                  } else {
                    setStep(2)
                    setText('What is your password?')
                  }
                }}>
                Register
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
                focus={true}
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
                focus={true}
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
                    setStep(4)
                    setText('I am a?')
                  }
                }}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <div className='radio'>
                <div className='subcontainer'>
                  <input
                    type='radio'
                    value='woman'
                    checked={sex === 'woman'}
                    onChange={() => {
                      setSex('woman')
                    }}
                  />
                  <div className='label'>Woman</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='radio'
                    value='man'
                    checked={sex === 'man'}
                    onChange={() => {
                      setSex('man')
                    }}
                  />
                  <div className='label'>Man</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='radio'
                    value='non-binary'
                    checked={sex === 'non-binary'}
                    onChange={() => {
                      setSex('non-binary')
                    }}
                  />
                  <div className='label'>Non-Binary</div>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <Button
                click={() => {
                  setStep(2)
                  setText('What is your name?')
                }}>
                Back
              </Button>
              <Button
                click={() => {
                  setStep(5)
                  setSexes({
                    women: sex === 'man' || sex === 'non-binary',
                    men: sex === 'woman' || sex === 'non-binary',
                    nonbinary: sex === 'non-binary',
                  })
                  setText('I am interested in?')
                }}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <div className='radio'>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='women'
                    checked={sexes['women']}
                    onChange={(event) => {
                      setSexes({...sexes, women: event.target.checked})
                    }}
                  />
                  <div className='label'>Women</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='man'
                    checked={sexes['men']}
                    onChange={(event) => {
                      setSexes({...sexes, men: event.target.checked})
                    }}
                  />
                  <div className='label'>Men</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='non-binary'
                    checked={sexes['non-binary']}
                    onChange={(event) => {
                      setSexes({...sexes, nonbinary: event.target.checked})
                    }}
                  />
                  <div className='label'>Non-Binary</div>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <Button
                click={() => {
                  setStep(4)
                  setText('I am a?')
                }}>
                Back
              </Button>
              <Button
                click={() => {
                  setStep(6)
                  setText('I am here for?')
                }}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className='container'>
            <div className='input'>
              <div className='text'>{text}</div>
              <div className='radio'>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='friendship'
                    checked={interest['friendship']}
                    onChange={(event) => {
                      setInterest({
                        ...interest,
                        friendship: event.target.checked,
                      })
                    }}
                  />
                  <div className='label'>Friendship</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='sex'
                    checked={interest['sex']}
                    onChange={(event) => {
                      setInterest({...interest, sex: event.target.checked})
                    }}
                  />
                  <div className='label'>Sex</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='casual'
                    checked={interest['casual']}
                    onChange={(event) => {
                      setInterest({...interest, casual: event.target.checked})
                    }}
                  />
                  <div className='label'>Casual dating</div>
                </div>
                <div className='subcontainer'>
                  <input
                    type='checkbox'
                    value='serious'
                    checked={interest['serious']}
                    onChange={(event) => {
                      setInterest({...interest, serious: event.target.checked})
                    }}
                  />
                  <div className='label'>Serious dating</div>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <Button
                click={() => {
                  setStep(5)
                  setText('I am interested in?')
                }}>
                Back
              </Button>
              <Button
                click={() =>
                  auth.register(email, password, name, sex, sexes, interest)
                }>
                Done
              </Button>
            </div>
          </div>
        )}
        <p>
          Already have an account? <Link link={Path.LOGIN}>Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Registration
