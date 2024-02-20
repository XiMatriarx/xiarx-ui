import React, {createContext, useContext, useState} from 'react'

import type {FC, ReactNode} from 'react'

interface AuthContext {
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

const AuthContext = createContext({} as AuthContext)

export const useAuth = () => useContext(AuthContext)

interface AuthProvider {
  children?: ReactNode | undefined
}

const AuthProvider: FC<AuthProvider> = (props) => {
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

      setToken('secret')
      loadToken('secret')
      window.location.reload()
    },
    authenticate: (email: string, password: string) => {
      console.log(email)
      console.log(password)

      setToken('secret')
      loadToken('secret')
      window.location.reload()
    },
    logout: () => {
      localStorage.clear()
      loadToken(null)
      window.location.reload()
    },
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider
