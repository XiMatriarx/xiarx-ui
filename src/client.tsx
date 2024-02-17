import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://localhost:6001',
  cache: new InMemoryCache(),
})

export default client
