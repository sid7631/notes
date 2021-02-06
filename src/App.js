import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './components/auth/AuthenticatedRoute'
import UnauthenticatedRoute from './components/auth/UnauthenticatedRoute'
import UtilWrapper from './components/utils/UtilWrapper'

import Dashboard from './containers/dashboard/Dashboard'
import HomePage from './containers/home-page/HomePage'
import SignIn from './containers/home-page/sign-in/SignIn'
import SignUp from './containers/home-page/sign-up/SignUp'
import { verifyAuth } from './store/actions'


export class App extends Component {

  componentDidMount() {
    this.props.verifyAuth()
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <UtilWrapper>
        <div className="App">
          <Switch>
            <UnauthenticatedRoute path='/' exact >
              <HomePage />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path='/dashboard'>
              <Dashboard />
            </AuthenticatedRoute>
            <UnauthenticatedRoute exact path='/sign-up'>
              <SignUp />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path='/sign-in'>
              <SignIn />
            </UnauthenticatedRoute>
            <Redirect to='/' />
          </Switch>
        </div>
      </UtilWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

const mapDispatchToProps = {
  verifyAuth,
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
