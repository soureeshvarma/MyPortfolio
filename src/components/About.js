import React from 'react';
import Sidebar from './Sidebar';
import './About.css';

function About() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>About Me</h1>
        <hr className="mode-divider" />
        <p>
          I’m a highly motivated Full Stack Developer from Hyderabad, India with a strong coding background seeking opportunities to utilize my expertise in crafting user-friendly interfaces and developing interactive web applications.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
        </p>
      </div>
    </div>
  );
}

export default About;