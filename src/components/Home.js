import React from 'react';
import Sidebar from './Sidebar';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <div className="content-section">
          <h2>About Me</h2>
          <div className="mode-divider"></div>
          <p>
            I'm a highly motivated Frontend Developer based in Hyderabad, India, with a strong foundation in web technologies and a passion for crafting clean, responsive, and interactive user interfaces. I specialize in building modern web applications using HTML, CSS, JavaScript, and React.
          </p>
          <p>
            My goal is to create seamless digital experiences that are both intuitive and visually engaging. I pay close attention to detail, design with purpose, and always aim to build interfaces that reflect the unique voice of each brand or individual.
          </p>
          <p>
            I take pride in writing clean code, designing responsive layouts, and turning ideas into pixel-perfect websites that not only function smoothly but also leave a lasting impression.
          </p>
        </div>
        <div className="content-section skills-section">
          <h2>What I'm Doing</h2>
          <div className="mode-divider"></div>
          <div className="skills">
            <div className="skill-card">
              <span role="img" aria-label="paintbrush">🎨</span>
              <h3 className="skill-title">Web Design</h3>
              <p>Creating clean, responsive, and user-friendly designs that blend creativity with functionality — built to look great on any device.</p>
            </div>
            <div className="skill-card">
              <span role="img" aria-label="laptop">💻</span>
              <h3 className="skill-title">Development</h3>
              <p>Developing interactive and scalable web applications with a strong focus on usability and modern best practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;