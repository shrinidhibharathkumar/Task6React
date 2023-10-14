import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can contact me via:</p>
      <div className="contact-icons">
        <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
          <i className="bi bi-instagram"></i> Instagram
        </a>
        <a href="mailto:shrinidhibharathkumar@gmail.com" className="btn btn-primary me-2">
          <i className="bi bi-envelope"></i> Email
        </a>
        <a href="https://github.com/shrinidhibharathkumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <i className="bi bi-github"></i> GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
