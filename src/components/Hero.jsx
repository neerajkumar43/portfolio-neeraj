import React, { useState, useEffect } from 'react';
import { Code2, Globe, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const words = ["Full Stack", "Scalable", "Secure", "Robust", "MERN Stack"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFadeState('fade-out');
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeState('fade-in');
      }, 500); // Wait for fade-out to finish

    }, 3000);

    return () => clearInterval(wordInterval);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Left Info Column */}
        <div className="hero-info">
          
          {/* Pulsing Status Badge */}
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span className="status-text">Available for freelance work</span>
          </div>

          {/* Heading with Typing Carousel */}
          <h1 className="hero-title">
            Architecting <br />
            <span className={`dynamic-word gradient-text ${fadeState}`}>
              {words[currentWordIndex]}
            </span> <br />
            Solutions<span className="purple-dot">.</span>
          </h1>

          <p className="hero-subtitle">
            Computer Science student specializing in Full Stack Development & UI/UX Design. I create intuitive, highly secure, and user-centric digital products merging flawless aesthetics with back-end precision.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-ctas">
            <button onClick={() => handleScrollTo('projects')} className="btn-primary-large">
              View Work <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn-secondary">
              Let's Connect
            </button>
          </div>

          {/* Social icons */}
          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@neeraj.com" className="social-icon-btn" title="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="hero-media">
          <div className="profile-wrapper">
            {/* Glowing background ring */}
            <div className="glow-ring"></div>
            
            {/* Tilted frame */}
            <div className="profile-frame">
              <img src={profileImg} alt="Neeraj" className="profile-photo" />
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react" title="React.js">
              <svg viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
              <span>React</span>
            </div>

            <div className="floating-badge badge-figma" title="Figma">
              <svg viewBox="0 0 38 57" width="20" height="20" fill="none">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABC9C"/>
                <path d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M0 28.5C0 23.2533 4.2533 19 9.5 19H19V38H9.5C4.2533 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
                <path d="M0 9.5C0 4.2533 4.2533 0 9.5 0H19V19H9.5C4.2533 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
                <path d="M19 0H28.5C33.7467 0 38 4.2533 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
              </svg>
              <span>Figma</span>
            </div>

            <div className="floating-badge badge-node" title="Node.js">
              <svg viewBox="0 0 256 288" width="18" height="18">
                <path d="M144.1 279.7l102.1-59c9.3-5.4 15.1-15.3 15.1-26v-118c0-10.7-5.8-20.6-15.1-26l-102.1-59c-9.3-5.4-20.9-5.4-30.2 0L11.9 50.7C2.6 56.1-.2 66 0 76.7v118c0 10.7 5.8 20.6 15.1 26l102.1 59c4.3 2.5 9 3.7 13.5 3.7 4.5.1 9.2-1.1 13.5-3.7z" fill="#339933"/>
              </svg>
              <span>Node</span>
            </div>

            <div className="floating-badge badge-mongo" title="MongoDB">
              <svg viewBox="0 0 384 512" width="18" height="18" fill="#47A248">
                <path d="M372 268c-12-32-68-128-180-264-1 0-2 0-3 0-112 136-168 232-180 264-16 43-4 89 26 122 34 37 89 57 151 57 4 0 7 0 11 0v-40c-25 0-48-5-65-15-28-17-41-47-33-80 13-52 56-118 101-182 1-2 4-2 5 0 23 32 46 68 62 101 4 8 7 16 10 24v113c19 13 41 24 67 29 11 2 21 3 32 3v-230c14-25 24-51 31-77 9 33-4 63-32 80 18-10 33-21 47-32zm-180 244c4 0 7 0 11 0v-36c-4 0-7 0-11 0v36z"/>
              </svg>
              <span>MongoDB</span>
            </div>
            
          </div>
        </div>

      </div>

      {/* Modern Mouse Scroll Indicator */}
      <div className="scroll-indicator-container" onClick={() => handleScrollTo('about')}>
        <div className="indicator-mouse">
          <span className="indicator-wheel"></span>
        </div>
        <span className="indicator-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
