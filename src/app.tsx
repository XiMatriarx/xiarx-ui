import React from 'react'
import {ApolloProvider} from '@apollo/client'
import {RouterProvider} from 'react-router-dom'

import AuthProvider from '@context/auth'
import LocaleProvider from '@context/locale'
import ThemeProvider from '@context/theme'
import client from '@app/client'
import router from '@app/router'

import './theme/index.scss'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <LocaleProvider>
          <ThemeProvider>
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </LocaleProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App
