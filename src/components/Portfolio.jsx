import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [
      { id: 1, title: 'SaaS AI Form Builder', category: 'Full Stack', description: 'AI-powered dynamic form generator using Gemini API.', color: '#00f2fe' },
      { id: 2, title: 'Nexus E-Commerce', category: 'MERN Stack', description: 'Full-stack e-commerce platform with secure payments.', color: '#7928ca' },
      { id: 3, title: 'Pulse Analytics', category: 'MERN Stack', description: 'Real-time data visualization dashboard.', color: '#ff007f' }
    ];
    setProjects(storedProjects);
  }, []);

  return (
    <section id="work" className="portfolio">
      <div className="section-header">
        <span className="section-tag">Work</span>
        <h2 className="section-title">Selected Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-thumbnail" style={{ '--project-color': project.color }}>
              <div className="project-mockup"></div>
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href="#" className="project-link">View Case Study →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
