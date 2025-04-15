import React from 'react';
import Sidebar from './Sidebar';
import './Home.css';

function Home() {
  console.log('Home component rendered');
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>About Me</h1>
        <hr className="mode-divider" />
        <p>
        I'm a highly motivated Full Stack Developer based in Hyderabad, India, with a strong background in coding and a passion for building user-friendly, interactive web applications. I specialize in creating functional, responsive, and visually appealing websites that not only meet user needs but also reflect the unique identity of each brand.
        </p>
        <p>
        My goal is to craft seamless digital experiences that are both intuitive and eye-catching. I bring a personal touch to every project, ensuring your message is delivered creatively and effectively.
        </p>
        <h2 style={{ color: 'var(--text-color)' }}>What I’m Doing</h2>
        <div className="skills">
          <div className="skill-card">
            <span role="img" aria-label="paintbrush">🎨</span>
            <h3 className="skill-title">Web Design</h3>
            <p>The most modern and high-quality design made at a professional level.</p>
          </div>
          <div className="skill-card">
            <span role="img" aria-label="code">💻</span>
            <h3 className="skill-title">Development</h3>
            <p>High-quality development of sites at the professional level.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
