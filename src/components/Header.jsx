import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ShieldAlert } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

  // Color mappings for shadows
  const getGlowColorClass = (item) => {
    switch (item) {
      case 'home': return 'glow-violet';
      case 'about': return 'glow-cyan';
      case 'skills': return 'glow-emerald';
      case 'projects': return 'glow-pink';
      case 'contact': return 'glow-amber';
      default: return '';
    }
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Toggle header visibility on scroll down/up
        if (window.scrollY > lastScrollY && window.scrollY > 80 && !mobileMenuOpen) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
        setLastScrollY(window.scrollY);

        // Highlight menu items on scroll
        if (location.pathname === '/') {
          const sections = ['home', 'about', 'skills', 'projects', 'contact'];
          let currentActive = 'home';
          
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 160 && rect.bottom >= 160) {
                currentActive = section;
                break;
              }
            }
          }
          setActiveSection(currentActive);
        }
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, location.pathname, mobileMenuOpen]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      // Go home first, then scroll
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Smooth scroll directly
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`header glass-panel ${isHidden ? 'header-hidden' : ''}`}>
        <div className="logo" onClick={() => handleNavClick('home')}>
          <span className="logo-glow">Neeraj<span className="logo-dot">.</span></span>
        </div>

        {/* Desktop Navbar */}
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''} ${getGlowColorClass(item.id)}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          {/* Admin Avatar bubble */}
          <Link to="/login" className="admin-avatar-link" title="Admin Panel">
            <span className="avatar-bubble">NK</span>
          </Link>

          {/* Mobile hamburger icon */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer glass-panel ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className={`dot-indicator ${item.id}`}></span>
              {item.label}
            </button>
          ))}
          <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="mobile-admin-btn">
            <ShieldAlert size={18} />
            Admin Dashboard
          </Link>
        </nav>
      </div>
      
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Header;
