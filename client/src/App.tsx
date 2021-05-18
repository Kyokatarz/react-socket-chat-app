import React from 'react'

import Routes from './Routes'
import './App.css'

export const ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'localhost:5000'
    : 'https://chat-app-kyo-katarz.herokuapp.com/'

function App() {
  return (
    <div className='App bg-blue-400'>
      <Routes />
    </div>
  )
}

export default App
