import React from 'react';
import './About.css';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <span className="section-tag">About Me</span>
          <h1 className="about-title">I'm Neeraj, a designer who codes.</h1>
          <p className="about-description">
            I specialize in building complex web applications and design systems. I believe that good design is not just how it looks, but how it works and feels.
          </p>
          <p className="about-description">
            With over 5 years of experience, I have worked with startups and established brands to create digital products that are both beautiful and functional.
          </p>
        </div>
        <div className="about-image-container">
          <img src={profileImg} alt="Neeraj" className="about-image" />
        </div>
      </div>
      
      <div className="about-extra">
        <div className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">Jan 2026 - Present</span>
              <h3 className="timeline-title">UI/UX Intern</h3>
              <span className="timeline-company">Cyber Core Technologies | Mohali, Punjab</span>
              <p className="timeline-desc">Designed intuitive and user-centric UI/UX solutions using Figma for web and mobile applications. Created wireframes, prototypes, and user flows.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Feb 2025 - Present</span>
              <h3 className="timeline-title">Full Stack Developer | Freelance</h3>
              <span className="timeline-company">Remote</span>
              <p className="timeline-desc">Developed and maintained scalable full-stack web applications. Built responsive interfaces and secure RESTful APIs with JWT authentication.</p>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2022 - 2026</span>
              <h3 className="timeline-title">Bachelor of Technology: Computer Science</h3>
              <span className="timeline-company">Shaheed Bhagat Singh State University | CGPA: 7.2</span>
              <p className="timeline-desc">Coursework: Data Structures, Algorithms, DBMS, Computer Systems, Project Management.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
