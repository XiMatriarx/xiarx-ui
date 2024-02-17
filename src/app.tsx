import React from 'react'
import {ApolloProvider} from '@apollo/client'
import {RouterProvider} from 'react-router-dom'

import ThemeProvider from '@context/theme'
import client from '@app/client'
import router from '@app/router'

import './theme/index.scss'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
