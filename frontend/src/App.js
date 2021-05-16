import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import Main from './pages/Main'
import Add from './pages/Add'
import Recepies from './pages/Recepies'
import background from './assets/bg.png'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' component={Main} exact />
      <Route path='/add' component={Add} exact />
      <Route path='/recepies' component={Recepies} />
    </div>
    <img className="background" src={background} />
    <div className="darker"> </div>
    </Router>
  );
}

export default App;
