import React from 'react';
import Sidebar from './Sidebar';
import './Skills.css';

function Skills() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>Skills</h1>
        <hr className="mode-divider" />
        <div className="skills-list">
          <div className="skill-item">
            <strong>Frontend: HTML, CSS, React</strong>
            <span className="percentage">80%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <strong>C</strong>
            <span className="percentage">80%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <strong>Java</strong>
            <span className="percentage">90%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <strong>Data Structures and Algorithms</strong>
            <span className="percentage">90%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <strong>Database Management: SQL, DBMS</strong>
            <span className="percentage">80%</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
