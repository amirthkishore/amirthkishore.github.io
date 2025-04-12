import React from 'react';
import '../assets/css/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or connect with me on social media.</p>
        <div className="contact-info">
          <a href="mailto:example@example.com" className="contact-link">example@example.com</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;