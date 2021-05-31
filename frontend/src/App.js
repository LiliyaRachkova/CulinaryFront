import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Main from './pages/Main'
import Add from './pages/Add'
import Recepies from './pages/Recepies'
import Details from './pages/Details'
import Favourites from './pages/Favourites'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' component={Main} exact />
      <Route path='/add' component={Add} exact />
      <Route path='/recepies' component={Recepies} />
      <Route path='/receipt/:id' component={Details} />
      <Route path='/favourites' component={Favourites} />
    </div>
    <div className="darker"> </div>
    </Router>
  );
}

export default App;
