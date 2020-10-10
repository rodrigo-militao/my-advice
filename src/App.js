import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RandomAdvice from './pages/RandomAdvice';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ RandomAdvice } />
        <Route exact path="/about" component={ About } />
      </Switch>
    </Router>
  );
}

export default App;
