import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import Main from './pages/Main'
import Add from './pages/Add'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' component={Main} exact />
      <Route path='/add' component={Add} exact />
    </div>
    </Router>
  );
}

export default App;
