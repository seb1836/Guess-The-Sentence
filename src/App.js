import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import GameSession from './Pages/GameSession'

function App() {
  return (
    <Fragment>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/GameSession' component={GameSession}></Route>
      </Router>
    </Fragment>
  )
}

export default App
