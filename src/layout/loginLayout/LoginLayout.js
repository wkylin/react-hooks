import React from 'react'

import { Switch, Route } from 'react-router-dom'

import LoginPage from './LoginPage'

const LoginLayout = (props) => {
  const { match } = props

  return (
    <div className="login">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={(routeProps) => <LoginPage {...routeProps} />}
        />
      </Switch>
    </div>
  )
}

export default LoginLayout
