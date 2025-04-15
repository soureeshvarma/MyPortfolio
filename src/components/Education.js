import React from 'react';
import Sidebar from './Sidebar';
import './Education.css';

function Education() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>Education</h1>
        <hr className="mode-divider" />
        <p>
          <span className="extra-bold">Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad</span>
          <br />
          <span className="highlight">2022 – Present</span>
          <br />
          Gained strong foundational knowledge in data structures, algorithms, software development, and emerging technologies. Actively participated in coding contests, technical events, and academic projects to enhance practical skills.
          <br />
          <span className="highlight">CGPA: 8.77/10</span>
        </p>
        <p>
          <span className="extra-bold">Vinjee Junior College, Hyderabad</span>
          <br />
          <span className="highlight">2020 – 2022</span>
          <br />
          Focused on core subjects like Mathematics, Physics, and Chemistry. Achieved academic excellence with consistent top performance, laying a solid groundwork for a career in engineering.
          <br />
          <span className="highlight">Percentage: 96.5%</span>
        </p>
        <p>
          <span className="extra-bold">Sanghamitra School, Hyderabad</span>
          <br />
          <span className="highlight">Completed in 2020</span>
          <br />
          Developed analytical thinking, communication skills, and a strong academic base. Took part in extracurricular activities and school-level competitions, contributing to all-round development.
          <br />
          <span className="highlight">Score: 89.0%</span>
        </p>
      </div>
    </div>
  );
}

export default Education;