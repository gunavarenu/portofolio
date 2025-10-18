import React from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Qualifications from './components/Qualifications';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <p>Welcome to my personal website</p>
      </header>
      <Navbar />
      <About />
      <Education />
      <Qualifications />
      <Certificates />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; 2025 Renu Gunavare C-34 | Built with ❤️</p>
      </footer>
    </div>
  );
}

export default App;