import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import GameSession from './Pages/GameSession'
import GameResult from './Pages/GameResult'

function App() {
  return (
    <Fragment>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/GameSession' component={GameSession}></Route>
        <Route path='/GameResult' component={GameResult}></Route>
      </Router>
    </Fragment>
  )
}

export default App
