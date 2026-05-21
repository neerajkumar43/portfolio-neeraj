import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, X, ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [
      {
        id: 1,
        title: 'SaaS AI Form Builder',
        category: 'Full Stack',
        description: 'AI-powered dynamic form generator using Gemini API.',
        longDescription: 'A highly interactive SaaS application that allows users to prompt-design complex multi-step forms in seconds. It integrates Gemini API for smart form field recommendations, offers dynamic drag-and-drop customization, and processes secure entry collections with complete validation structures.',
        color: '#22d3ee', // Cyan
        features: ['Instant AI Form Generation from text prompt', 'Drag and drop question sorting', 'Highly detailed entry charts analytics dashboard', 'Export responses to CSV & JSON'],
        tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Gemini API'],
        github: 'https://github.com',
        live: 'https://vercel.com'
      },
      {
        id: 2,
        title: 'Nexus Fintech Dashboard',
        category: 'UI/UX Design',
        description: 'Modern, data-dense digital banking terminal.',
        longDescription: 'A complete mobile and web banking redesign focusing on high accessibility and dense financial metrics. Developed key screen states, interactive analytics flows, detailed wireframes, and pixel-perfect high-fidelity screens utilizing advanced Figma design systems.',
        color: '#a78bfa', // Violet
        features: ['Complete accessible design system & components', 'Light & Dark theme state dashboards', 'Smooth micro-interactions on asset charts', 'Comprehensive user testing feedback analysis'],
        tech: ['Figma', 'UI Design', 'Wireframing', 'User Research', 'Prototyping'],
        github: 'https://figma.com',
        live: 'https://figma.com'
      },
      {
        id: 3,
        title: 'Aura E-Commerce platform',
        category: 'MERN Stack',
        description: 'Premium shopping web app with secure payment layouts.',
        longDescription: 'A gorgeous, high-end e-commerce application focused on micro-interactions. Powered by React, Express, MongoDB, and Node.js. Features secure token authentication, fully customizable cart drawers, a dynamic checkout interface, and payment gateway integration mockups.',
        color: '#f472b6', // Pink
        features: ['JWT security user authentication login/signup', 'Reactive shopping cart drawer storage', 'Custom admin panel to add/edit shop items', 'Dynamic filtering, sorting, and tag search'],
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Postman'],
        github: 'https://github.com',
        live: 'https://vercel.com'
      }
    ];
    setProjects(storedProjects);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
  }, []);

  return (
    <section id="projects" className="portfolio-section-container">
      <div className="portfolio-header-center">
        <span className="section-tag">Featured Works</span>
        <h2 className="section-title">Selected Case Studies</h2>
        <p className="section-subtitle">
          A showcase of recent interface designs and full-stack development projects built with attention to code modularity, speed, and premium user experience.
        </p>
      </div>

      <div className="portfolio-project-grid">
        {projects.map((project) => (
          <div 
            className="project-glass-card glass-panel" 
            key={project.id}
            style={{ '--project-neon': project.color }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-preview-box">
              <div className="grid-dot-pattern"></div>
              {/* Abstract decorative floating shapes */}
              <div className="decor-circle circle-1"></div>
              <div className="decor-circle circle-2"></div>
              
              <span className="project-category-badge">{project.category}</span>
              
              <div className="project-hover-trigger">
                <span className="view-case-trigger-btn">
                  <Eye size={16} /> View Case Study
                </span>
              </div>
            </div>

            <div className="project-meta-info">
              <h3 className="project-title-heading">{project.title}</h3>
              <p className="project-short-desc">{project.description}</p>
              
              <div className="project-card-footer">
                <button className="read-more-arrow-btn">
                  Explore Case Study <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Detailed Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel project-modal-wide" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>×</button>

            <div className="project-modal-grid">
              
              {/* Left description */}
              <div className="project-modal-desc-col">
                <span 
                  className="modal-proj-badge"
                  style={{ backgroundColor: `${selectedProject.color}15`, color: selectedProject.color, border: `1px solid ${selectedProject.color}30` }}
                >
                  {selectedProject.category}
                </span>
                
                <h3 className="modal-proj-title">{selectedProject.title}</h3>
                
                <p className="modal-proj-long-desc">{selectedProject.longDescription}</p>
                
                <div className="modal-proj-features-box">
                  <h4>Key Deliverables & Features</h4>
                  <ul>
                    {(selectedProject.features || ['Complete interface wireframing', 'Responsive client-side logic', 'Optimized asset delivery', 'Clean CSS layouts']).map((feat, index) => (
                      <li key={index}>
                        <span className="bullet-tick" style={{ color: selectedProject.color }}>✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right meta details */}
              <div className="project-modal-meta-col">
                <div className="modal-meta-card glass-panel">
                  <h4>Technology Stack</h4>
                  <div className="modal-tech-flex">
                    {(selectedProject.tech || ['React', 'Figma', 'Node']).map((t, index) => (
                      <span key={index} className="modal-tech-badge">{t}</span>
                    ))}
                  </div>

                  <div className="modal-links-container">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary-large project-modal-btn"
                      style={{ background: `linear-gradient(135deg, ${selectedProject.color} 0%, #a78bfa 100%)`, boxShadow: `0 4px 15px ${selectedProject.color}30` }}
                    >
                      <Github size={16} /> Source Code
                    </a>
                    
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary project-modal-btn"
                    >
                      Launch Live App <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
