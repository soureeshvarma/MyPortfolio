import React from 'react';
import Sidebar from './Sidebar';
import './Resume.css';

function Resume() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h2 style={{ fontSize: '2rem', color: 'var(--text-color)' }}>Resume</h2>
        <hr className="mode-divider" />
        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-color)' }}>Education</h2>
        <p><strong>B.Tech, Computer Science</strong><br />2022 - Present<br />Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad<br />CGPA: 8.77/10</p>
        <p><strong>Higher Secondary (MPC)</strong><br />2020 - 2022<br />Vinjee Junior College, Hyderabad<br />Percentage: 96.5%</p>
        <p><strong>High School (CBSE)</strong><br />2020<br />Sanghamitra School, Hyderabad<br />Score: 89.0%</p>
        <h2 style={{ fontSize: '1.6rem', color: 'var(--text-color)' }}>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C, Java, HTML/CSS, JavaScript</li>
          <li><strong>Frameworks:</strong> React.js</li>
          <li><strong>Databases:</strong> SQL</li>
          <li><strong>Developer Tools:</strong> Git, VS Code</li>
          <li><strong>Concepts:</strong> Data Structures and Algorithms, OOP, DBMS</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;