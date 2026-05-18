import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="milkyway-bg"></div>
      <div className="hero-content">
        <span className="hero-tagline">UI/UX Intern & Product Designer</span>
        <h1 className="hero-title">
          Crafting Digital <br />
          Products With <br />
          <span className="gradient-text">Purpose</span> & Precision.
        </h1>
        <p className="hero-subtitle">
          Computer Science student specializing in UI/UX Design. I create intuitive, user-centered digital products merging aesthetics with functionality.
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
      
      {/* Floating UI Elements (Animations) */}
      <div className="floating-ui">
        <div className="ui-element ui-card">
          <div className="ui-avatar"></div>
          <div className="ui-lines">
            <div className="ui-line-long"></div>
            <div className="ui-line-short"></div>
          </div>
        </div>
        
        <div className="ui-element ui-toggle">
          <div className="ui-toggle-track">
            <div className="ui-toggle-thumb"></div>
          </div>
          <span>Active</span>
        </div>
        
        <div className="ui-element ui-slider">
          <div className="ui-slider-track">
            <div className="ui-slider-fill"></div>
            <div className="ui-slider-thumb"></div>
          </div>
        </div>
        
        <div className="ui-element ui-chart">
          <div className="ui-bar" style={{height: '40%'}}></div>
          <div className="ui-bar" style={{height: '70%'}}></div>
          <div className="ui-bar" style={{height: '50%'}}></div>
          <div className="ui-bar" style={{height: '90%'}}></div>
        </div>
      </div>

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
