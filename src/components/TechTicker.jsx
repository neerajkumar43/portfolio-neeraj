import React from 'react';
import './TechTicker.css';

const TechTicker = () => {
  const techItems = [
    { name: 'React.js', color: '#61dafb' },
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Express.js', color: '#ffffff' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'Tailwind CSS', color: '#06b6d4' },
    { name: 'Git', color: '#f05032' },
    { name: 'GitHub', color: '#ffffff' },
    { name: 'Postman', color: '#ff6c37' },
    { name: 'Vercel', color: '#ffffff' }
  ];

  // Duplicate items twice to ensure perfect looping coverage
  const duplicatedItems = [...techItems, ...techItems, ...techItems];

  return (
    <div className="ticker-container">
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {duplicatedItems.map((tech, index) => (
            <div className="ticker-item" key={index}>
              <span className="ticker-dot" style={{ backgroundColor: tech.color }}></span>
              <span className="ticker-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
