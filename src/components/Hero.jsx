import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tagline">UI/UX Designer & Product Strategist</span>
        <h1 className="hero-title">
          Crafting Digital <br />
          Products With <br />
          <span className="gradient-text">Purpose</span> & Precision.
        </h1>
        <p className="hero-subtitle">
          I help founders and teams build scalable, user-centered digital products from zero to one. 
          Focused on merging high-end aesthetics with functional usability.
        </p>
        <div className="hero-actions">
          <button className="btn-primary-large">View Case Studies</button>
          <button className="btn-secondary">Let's Talk</button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Top 1%</span>
            <span className="stat-label">UI/UX Designer</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements are now in the background, but we can add a subtle scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
