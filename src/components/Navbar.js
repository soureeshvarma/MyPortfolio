import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleTheme, theme }) {
  const location = useLocation();
  const [leftHome, setLeftHome] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/' && !leftHome) {
      setLeftHome(true);
    }
  }, [location.pathname, leftHome]);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul>
          <li>
            <Link
              to="/"
              className={
                location.pathname === '/' && !leftHome
                  ? 'initial-active'
                  : location.pathname === '/'
                  ? 'active'
                  : ''
              }
            >
              Home
            </Link>
          </li>
          <li><Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}

export default Navbar;