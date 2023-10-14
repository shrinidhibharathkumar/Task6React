import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <div className={`menu${menuOpen ? ' open' : ''}`}>
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
              Home
            </li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>
              About
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>
              Skills
            </li>
            <li className={activeSection === 'experience' ? 'active' : ''} onClick={() => handleNavClick('experience')}>
              Experience
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
