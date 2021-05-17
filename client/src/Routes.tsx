import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ChatRoom from './pages/ChatRoom'

import LandingPage from './pages/LandingPage/LandingPage'

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/chat' component={ChatRoom} />
      </Switch>
    </>
  )
}

export default Routes
