import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Nexus Fintech App',
    category: 'UI/UX Design • Case Study',
    description: 'A complete redesign of a mobile banking app focusing on accessibility and speed.',
    color: '#00f2fe'
  },
  {
    id: 2,
    title: 'Aura E-Commerce',
    category: 'Visual Design • Web',
    description: 'A minimal and immersive shopping experience for a luxury fashion brand.',
    color: '#7928ca'
  },
  {
    id: 3,
    title: 'Pulse Dashboard',
    category: 'Product Design • Dashboard',
    description: 'Complex data visualization made simple and beautiful for SaaS platforms.',
    color: '#ff007f'
  }
];

const Portfolio = () => {
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
