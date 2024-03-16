import React, { useState } from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const handlePageChange = (pageName) => {
    setPage(pageName);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <button className={`nav-button ${page === 'home' ? 'active' : ''}`} onClick={() => handlePageChange('home')}>
            Home
          </button>
          <button className={`nav-button ${page === 'about' ? 'active' : ''}`} onClick={() => handlePageChange('about')}>
            Sobre Mim
          </button>
          <button className={`nav-button ${page === 'experience' ? 'active' : ''}`} onClick={() => handlePageChange('experience')}>
            Experiência Curricular
          </button>
          <button className={`nav-button ${page === 'projects' ? 'active' : ''}`} onClick={() => handlePageChange('projects')}>
            Projetos
          </button>
        </nav>
      </header>
      <div className="content">
        {page === 'home' && <Home />}
        {page === 'about' && <AboutMe />}
        {page === 'experience' && <Experience />}
        {page === 'projects' && <Projects />}
      </div>
    </div>
  );
}

export default App;
