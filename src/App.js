import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarTop from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  const [noturnView, setNoturnView] = useState(false);

  return (
    <>
      <Router>
        <NavbarTop
          noturnView={noturnView}
          setNoturnView={setNoturnView} />
        <HeroSection />
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
