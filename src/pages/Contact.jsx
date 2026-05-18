import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <span className="section-tag">Get In Touch</span>
        <h1 className="contact-title">Let's build something great together.</h1>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className="btn-primary-large">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
