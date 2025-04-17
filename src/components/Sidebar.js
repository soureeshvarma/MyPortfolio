import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={process.env.PUBLIC_URL + '/Profile.jpg'}
          alt="Indukuri Soureesh Varma"
          className="profile-image"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/120'; console.log('Image failed to load, using placeholder'); }}
        />
        <h2 className="name">Indukuri Soureesh Varma</h2>
        <p className="title">Developer</p>
      </div>
      <div className="contact-info">
        <p data-icon="📧"><span>soureeshvarma2004@gmail.com</span></p>
        <p data-icon="📞"><span>+91-9491052999</span></p>
        <p data-icon="📅"><span>15-12-2004</span></p>
        <p data-icon="📍"><span>Hyderabad, India</span></p>
      </div>
      <div className="social-links">
        <a href="https://leetcode.com/u/soureesh_varma3/" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/leetcode.png'} alt="LeetCode" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/soureesh_indukuri/?next=%2F" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/instagram.png'} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://x.com/VarmaSoureesh" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/twitter.png'} alt="Twitter" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;