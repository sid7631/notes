import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loading from './components/loading/Loading'
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
      <div className="App">
        <header>
          <Switch>
            <Route  path='/' exact component={HomePage} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/sign-up' exact component={SignUp} />
            <Route path='/sign-in' exact component={SignIn} />
            <Route path='/loading' exact component={Loading} />
            <Redirect to='/' />
          </Switch>
        </header>
      </div>
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
