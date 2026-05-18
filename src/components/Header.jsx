import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // Scrolling down
          setIsHidden(true);
        } else { // Scrolling up
          setIsHidden(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
      <div className="logo">
        <Link to="/" className="gradient-text">Neeraj.</Link>
      </div>
      <nav className="nav">
        <Link to="/projects">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="cta">
        <Link to="/login" className="btn-primary">Admin</Link>
      </div>
    </header>
  );
};

export default Header;
