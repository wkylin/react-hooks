import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginLayout from '../loginLayout/LoginLayout'
import PrimaryLayout from '../primaryLayout/PrimaryLayout'
import LeftNavLayout from '../leftNavLayout/LeftNavLayout'
import Home from './Home'
import NotFound from './404'

const LayoutApp = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/login"
            render={(props) => <LoginLayout {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => <PrimaryLayout {...props} />}
          />
          <Route
            exact
            path="/leftnav"
            render={(props) => <LeftNavLayout {...props} />}
          />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default LayoutApp
