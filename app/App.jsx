import React, { Component } from 'react'
import Home from './Home.jsx'
import Address from './Address.jsx'
import NotFound from './NotFound.jsx'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

export default App
