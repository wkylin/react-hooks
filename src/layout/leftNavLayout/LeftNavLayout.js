import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Button from './Button'
import ProfileInfo from './ProfileInfo'
import ProfilePage from './ProfilePage'

const PrimaryLayout = (props) => {
  const { match } = props

  return (
    <div className="">
      <div className="row">
        <div className="left-nav col-md-3">
          <div className="link row">
            <a href="/profile/info">Profile Info </a>
          </div>
          <div className="row">
            <Button variant="warning" type="button">
              <a href="/dashboard">Go to Dashboard</a>
            </Button>
          </div>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              render={(renderProps) => <ProfilePage {...renderProps} />}
            />
            <Route exact path={`${match.path}/info`} component={ProfileInfo} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default PrimaryLayout
