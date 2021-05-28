import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Main from './pages/Main'
import Add from './pages/Add'
import Recepies from './pages/Recepies'
import Details from './pages/Details'
import background from './assets/bg.png'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' component={Main} exact />
      <Route path='/add' component={Add} exact />
      <Route path='/recepies' component={Recepies} />
      <Route path='/receipt/:id' component={Details} />
    </div>
    <img className="background" src={background} />
    <div className="darker"> </div>
    </Router>
  );
}

export default App;
