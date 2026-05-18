import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Design',
    skills: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems', 'User Flows']
  },
  {
    title: 'Development',
    skills: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.js', 'Node.js']
  },
  {
    title: 'Tools & Management',
    skills: ['VS Code', 'Project Management', 'Git']
  }
];

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <span className="section-tag">Capabilities</span>
        <h1 className="skills-title">Skills & Expertise</h1>
        <p className="skills-subtitle">
          Here are the technologies and methodologies I use to bring ideas to life.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h2 className="category-title">{category.title}</h2>
              <div className="tags-container">
                {category.skills.map((skill, sIndex) => (
                  <span className="skill-tag" key={sIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
