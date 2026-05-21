import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {currentYear} Neeraj. Crafted with precision in React.</p>
        </div>
        <div className="footer-right">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:kumarneeraj.inbox@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
