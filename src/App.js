import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Query from './containers/query'
import Mutate from './containers/mutate'
import Nav from './components/nav-bar'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/query" component={Query} />
            <Route path="/mutate" component={Mutate}/>
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
