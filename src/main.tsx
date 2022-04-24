import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo-client'
import App from './App'
import "antd/dist/antd.css";


const AppWraper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWraper />
  </React.StrictMode>
)
