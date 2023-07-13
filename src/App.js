import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollapsibleExample from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <CollapsibleExample />
        <Routes>
          <Route path='/' exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
