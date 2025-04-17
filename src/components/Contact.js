import React from 'react';
import Sidebar from './Sidebar';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h1>Contact</h1>
        <hr className="mode-divider" />
        <div className="contact-details">
          <p><strong>Email:</strong> soureeshvarma2004@gmail.com</p>
          <p><strong>Phone:</strong> +91-9491052999</p>
          <p><strong>Address:</strong> Hyderabad, India</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;