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
        <p><strong>Email:</strong> <a href="mailto:soureeshvarma2004@gmail.com" style={{ color: 'var(--text-color)' }}>soureeshvarma2004@gmail.com</a></p>
        <p><strong>Phone:</strong> +91-9491052999</p>
        <p><strong>Address:</strong> Hyderabad, India</p>
        <form>
          <label><strong>Name:</strong>
            <input type="text" name="name" />
          </label>
          <label><strong>Message:</strong>
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;