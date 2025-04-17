import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
        <h2 className="name">Indukuri Soureesh Varma</h2>
        <h3 className="title">Developer</h3>
      </div>
      <div className="contact-info">
        <p data-icon="📧">soureeshvarma2004@gmail.com</p>
        <p data-icon="📞">+91-9491052999</p>
        <p data-icon="📅">15-12-2004</p>
        <p data-icon="📍">Hyderabad, India</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/soureeshvarma" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="/x.png" alt="X" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;