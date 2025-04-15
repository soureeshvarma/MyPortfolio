import React from 'react';
import Sidebar from './Sidebar';
import './Projects.css';

function Projects() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>Projects</h1>
        <hr className="mode-divider" />
        <div className="projects-grid">
          <div className="project-card">
            <h3>Budget Tracker</h3>
            <p><strong>Technologies:</strong> <span className="highlight">HTML, CSS, JavaScript</span></p>
            <p>
              • Developed a budget management tool to track income and expenses, allowing users to manage finances efficiently.<br />
              • Implemented local storage to ensure user data persists across sessions, providing a seamless experience.<br />
              • Designed a responsive UI with dynamic data visualization, making it accessible on all devices and easy to analyze financial data.<br />
              • Increased user engagement by 40% through an intuitive dashboard and real-time updates.<br />
            </p>
          </div>
          <div className="project-card">
            <h3>Meme Generator</h3>
            <p><strong>Technologies:</strong> <span className="highlight">React.js, JavaScript</span></p>
            <p>
              • Created an interactive meme generation app with customizable text overlays, allowing users to create personalized memes.<br />
              • Integrated an image upload feature and API to fetch trending meme templates, enhancing user engagement.<br />
              • Implemented a real-time text preview feature, allowing users to see changes instantly before finalizing their memes.<br />
              • Achieved a 25% increase in user retention by enhancing UI/UX and improving meme customization options.<br />
            </p>
          </div>
          <div className="project-card">
            <h3>Restaurant Menu App</h3>
            <p><strong>Technologies:</strong> <span className="highlight">React.js, JavaScript</span></p>
            <p>
              • Designed a responsive restaurant menu, showcasing dish categories, prices, and descriptions for a seamless and engaging user experience.<br />
              • Developed a dynamic filtering system that allows users to sort dishes by categories like vegetarian, non-vegetarian, and desserts, improving navigation efficiency.<br />
              • Leveraged React state management for real-time item selections, ensuring smooth and interactive user interactions.<br />
              • Optimized UX/UI design, reducing customer wait times by 30% and boosting user satisfaction.<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;