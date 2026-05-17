import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="gradient-text">Neeraj.</span>
      </div>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="cta">
        <button className="btn-primary">Let's Talk</button>
      </div>
    </header>
  );
};

export default Header;
