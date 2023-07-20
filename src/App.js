import React, { useState } from 'react';
import './App.css';
import { Element } from 'react-scroll';
import NavbarTop from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  const [noturnView, setNoturnView] = useState(true);

  return (
    <div className={`${noturnView ? 'dark-mode-background' : ''}`}>
      <NavbarTop noturnView={noturnView} setNoturnView={setNoturnView} />
      <HeroSection
        noturnView={noturnView} />
      <Element name="projects">
        <Projects
          noturnView={noturnView} />
      </Element>
      <Element name="about">
        <About
          noturnView={noturnView} />
      </Element>
      <Element name="contact">
        <Contact
          noturnView={noturnView} />
      </Element>
      <Footer
        noturnView={noturnView}
        setNoturnView={setNoturnView} />
    </div>

  );
}

export default App;
