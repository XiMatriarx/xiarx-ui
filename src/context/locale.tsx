import React, {createContext, useContext, useState} from 'react'

import type {FC, ReactNode} from 'react'

interface LocaleContext {
  token: string | null
  register: (
    email: string,
    password: string,
    name: string,
    sex: string,
    sexes: {[key: string]: boolean},
    interest: {[key: string]: boolean},
  ) => void
  authenticate: (email: string, password: string) => void
  logout: () => void
}

const getToken = (): string | null =>
  JSON.parse(localStorage.getItem('token') || 'null')

const setToken = (token: string): void =>
  localStorage.setItem('token', JSON.stringify(token))

const LocaleContext = createContext({} as LocaleContext)

export const useLocale = () => useContext(LocaleContext)

interface LocaleProvider {
  children?: ReactNode | undefined
}

const LocaleProvider: FC<LocaleProvider> = (props) => {
  const [token, loadToken] = useState<string | null>(getToken())

  const value = {
    token,
    setToken: (token: string) => {
      setToken(token)
      loadToken(token)
    },
    register: (
      email: string,
      password: string,
      name: string,
      sex: string,
      sexes: {[key: string]: boolean},
      interest: {[key: string]: boolean},
    ) => {
      console.log(email)
      console.log(password)
      console.log(name)
      console.log(sex)
      console.log(sexes)
      console.log(interest)
    },
    authenticate: (email: string, password: string) => {
      console.log(email)
      console.log(password)
    },
    logout: () => {},
  }

  return (
    <LocaleContext.Provider value={value}>
      {props.children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
