import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import DashboardPage from './DashboardPage'
import About from './About'

const PrimaryLayout = (props) => {
  const { match } = props

  return (
    <div className="">
      <Header appTitle="React Multi Layout" />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={(renderProps) => <DashboardPage {...renderProps} />}
        />
        <Route path={`${match.path}/about`} component={About} />
      </Switch>
      <Footer />
    </div>
  )
}

export default PrimaryLayout
