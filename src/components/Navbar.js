import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleTheme, theme }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isEducation = location.pathname === '/education';
  const isSkills = location.pathname === '/skills';
  const isProjects = location.pathname === '/projects';
  const isContact = location.pathname === '/contact';

  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul>
          <li><Link to="/" className={isHome ? 'active' : ''}>Home</Link></li>
          <li><Link to="/education" className={isEducation ? 'active' : ''}>Education</Link></li>
          <li><Link to="/skills" className={isSkills ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/projects" className={isProjects ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/contact" className={isContact ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;