import React, {createContext, useContext, useState} from 'react'

import type {FC, ReactNode} from 'react'

interface AuthContext {
  token: string | null
  authenticate: (username: string, password: string) => void
  logout: () => void
}

const getToken = (): string | null =>
  JSON.parse(localStorage.getItem('token') || '{}') || null

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
    authenticate: (username: string, password: string) => {
      console.log(username)
      console.log(password)
    },
    logout: () => {},
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider
