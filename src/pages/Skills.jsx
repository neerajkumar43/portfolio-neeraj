import React from 'react';
import { Palette, Terminal, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Interface Design',
    icon: <Palette size={20} />,
    color: 'var(--color-violet)',
    skills: ['Figma', 'UI/UX Design', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'User Flows', 'Information Architecture']
  },
  {
    title: 'Full Stack Development',
    icon: <Terminal size={20} />,
    color: 'var(--color-cyan)',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS', 'REST APIs', 'JWT Auth']
  },
  {
    title: 'Tools & Workflows',
    icon: <Wrench size={20} />,
    color: 'var(--color-emerald)',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel Deployment', 'npm & Node Packages', 'Project Management', 'Agile Methodologies']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section-container">
      <div className="skills-header-center">
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">Technical Arsenal & Expertise</h2>
        <p className="section-subtitle">
          The technologies, tools, and methodologies I leverage to design intuitive interfaces and develop highly scalable web applications.
        </p>
      </div>

      <div className="skills-grid-layout">
        {skillCategories.map((cat, index) => (
          <div 
            className="skill-card-panel glass-panel" 
            key={index}
            style={{ '--card-accent': cat.color }}
          >
            <div className="skill-card-header">
              <div className="skill-icon-bubble">
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
            </div>
            
            <div className="skill-tags-flex">
              {cat.skills.map((skill, sIndex) => (
                <span className="skill-tag-bubble" key={sIndex}>
                  <span className="tag-bullet"></span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
