import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CollapsibleExample from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <CollapsibleExample />
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
