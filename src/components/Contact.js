import React from 'react';
import Sidebar from './Sidebar';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <h2>Contact</h2>
        <hr className="mode-divider" />
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:soureeshvarma2004@gmail.com" style={{ color: 'var(--text-color)' }}>soureeshvarma2004@gmail.com</a></p>
          <p><strong>Phone:</strong> +91-9491052999</p>
          <p><strong>Address:</strong> Hyderabad, India</p>
        </div>
        <div className="form-section">
          <form>
            <div className="form-group">
              <label><strong>Name:</strong></label>
              <input type="text" name="name" />
            </div>
            <div className="form-group">
              <label><strong>Message:</strong></label>
              <textarea name="message" rows="5"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;