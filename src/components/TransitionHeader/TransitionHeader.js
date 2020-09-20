import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import DynamicScrollToTop from 'components/ScrollToTopController/DynamicScrollToTop'
import Header from './Header'
import Body from './Body'
import Home from './Home'
import './style.css'

function TransitionHeader() {
  return (
    <div className="wrapper">
      <Router>
        {/* <DynamicScrollToTop /> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default TransitionHeader
