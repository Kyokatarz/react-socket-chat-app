import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import ChatRoom from './components/ChatRoom'
import Join from './components/Join'

export const ENDPOINT =
  process.env.NODE_ENV === 'development' ? 'localhost:5000' : 'undefined'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <Join />
        </Route>
        <Route exact path='/chat'>
          <ChatRoom />
        </Route>
      </Router>
    </div>
  )
}

export default App
