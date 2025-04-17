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
            <div className="skill-info">
              <strong>Frontend: HTML, CSS, React <span className="percentage">80%</span></strong>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <strong>C <span className="percentage">80%</span></strong>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <strong>Java <span className="percentage">90%</span></strong>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <strong>Data Structures and Algorithms <span className="percentage">90%</span></strong>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-info">
              <strong>Database Management: SQL, DBMS <span className="percentage">80%</span></strong>
            </div>
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