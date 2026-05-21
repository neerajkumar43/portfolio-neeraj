import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, ExternalLink, GraduationCap, Briefcase, Eye } from 'lucide-react';
import './About.css';
import profileImg from '../assets/profile.png';

const About = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    // Load certificates from localStorage or defaults
    const storedCerts = JSON.parse(localStorage.getItem('certificates')) || [
      {
        id: 1,
        title: 'Full Stack Web Development',
        issuer: 'Udemy / Professional Training',
        date: 'Oct 2025',
        credentialId: 'UC-b9b5f7e4-2394-4b57-a37f-94ad24fcf82e'
      },
      {
        id: 2,
        title: 'UI/UX Design Certification',
        issuer: 'Interaction Design Foundation',
        date: 'Dec 2025',
        credentialId: 'IDF-8294715-UIUX'
      },
      {
        id: 3,
        title: 'Advanced React Development',
        issuer: 'Meta / Coursera',
        date: 'Nov 2025',
        credentialId: 'META-REACT-4927'
      }
    ];
    setCertificates(storedCerts);
    localStorage.setItem('certificates', JSON.stringify(storedCerts));
  }, []);

  return (
    <section id="about" className="about-section-container">
      <div className="about-grid">
        
        {/* Profile Image & Pitch */}
        <div className="about-text-col">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Design with Precision, Code with Purpose.</h2>
          <p className="about-paragraph">
            I am Neeraj, a Full Stack Developer and UI/UX Designer who bridges the gap between gorgeous interface architecture and stable backend performance. As a Computer Science student at Shaheed Bhagat Singh State University, I focus on constructing interfaces that aren't just visually spectacular, but built with optimal efficiency and user-centered focus.
          </p>
          <p className="about-paragraph">
            My experience spans from designing precise wireframes and interactive prototypes in Figma, to engineering end-to-end MERN (MongoDB, Express, React, Node.js) web applications. I love taking complex, data-heavy problems and transforming them into streamlined, beautiful software.
          </p>

          {/* Core Stats */}
          <div className="about-stats-row">
            <div className="stat-card glass-panel">
              <span className="stat-num">1+</span>
              <span className="stat-lbl">Years Industry Experience</span>
            </div>
            <div className="stat-card glass-panel">
              <span className="stat-num">15+</span>
              <span className="stat-lbl">Projects Completed</span>
            </div>
          </div>
        </div>

        {/* profile display */}
        <div className="about-visual-col">
          <div className="visual-wrapper">
            <div className="visual-halo"></div>
            <div className="visual-panel glass-panel">
              <img src={profileImg} alt="Neeraj Profile" className="visual-image" />
              <div className="visual-tag-bar">
                <span className="visual-name">Neeraj Kumar</span>
                <span className="visual-sub">UI/UX & MERN Dev</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Experience & Education Timelines */}
      <div className="timeline-grid">
        
        {/* Experience Column */}
        <div className="timeline-col">
          <div className="timeline-header">
            <Briefcase size={22} className="timeline-icon-accent violet" />
            <h3>Professional Experience</h3>
          </div>
          <div className="timeline-items">
            
            <div className="timeline-card glass-panel">
              <span className="timeline-card-date"><Calendar size={13} /> Jan 2026 - Present</span>
              <h4 className="timeline-card-title">UI/UX Intern</h4>
              <span className="timeline-card-company"><MapPin size={13} /> Cyber Core Technologies | Mohali, Punjab</span>
              <p className="timeline-card-description">
                Designing user-centric, high-fidelity wireframes and functional prototypes for client-facing software products. Mapping user journeys, user flows, and conducting accessibility analysis to elevate overall usability standards.
              </p>
            </div>

            <div className="timeline-card glass-panel">
              <span className="timeline-card-date"><Calendar size={13} /> Feb 2025 - Present</span>
              <h4 className="timeline-card-title">Full Stack Developer</h4>
              <span className="timeline-card-company"><MapPin size={13} /> Freelance & Independent Projects</span>
              <p className="timeline-card-description">
                Building responsive full-stack applications with React, Node.js, and MongoDB. Integrating secure JWT authentication flows, complex dashboards, and dynamic client-side APIs.
              </p>
            </div>

          </div>
        </div>

        {/* Education Column */}
        <div className="timeline-col">
          <div className="timeline-header">
            <GraduationCap size={22} className="timeline-icon-accent cyan" />
            <h3>Academic Background</h3>
          </div>
          <div className="timeline-items">
            
            <div className="timeline-card glass-panel">
              <span className="timeline-card-date"><Calendar size={13} /> 2022 - 2026</span>
              <h4 className="timeline-card-title">Bachelor of Technology: Computer Science</h4>
              <span className="timeline-card-company"><MapPin size={13} /> Shaheed Bhagat Singh State University</span>
              <p className="timeline-card-description">
                Focusing on core paradigms: Data Structures, Analysis of Algorithms, DBMS, Software Engineering, and Object-Oriented System Design. Maintained an active CGPA of 7.2.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Certifications Drawer Section */}
      <div className="certifications-wrapper">
        <div className="timeline-header">
          <Award size={22} className="timeline-icon-accent emerald" />
          <h3>Professional Credentials</h3>
        </div>
        <div className="certs-grid">
          {certificates.map((cert) => (
            <div className="cert-card glass-panel" key={cert.id}>
              <div className="cert-header">
                <Award className="cert-icon" size={20} />
                <button className="cert-view-btn" onClick={() => setSelectedCert(cert)}>
                  <Eye size={14} /> View
                </button>
              </div>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-meta">
                <span className="cert-date">{cert.date}</span>
                <span className="cert-id" title="Credential ID">{cert.credentialId.substring(0, 15)}...</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedCert(null)}>×</button>
            
            <div className="cert-modal-body">
              <div className="cert-modal-icon-container">
                <Award size={48} className="cert-modal-badge-icon" />
              </div>
              
              <span className="cert-modal-verified">✓ VERIFIED CREDENTIAL</span>
              <h3 className="cert-modal-title">{selectedCert.title}</h3>
              <p className="cert-modal-issuer">Issued by <strong>{selectedCert.issuer}</strong></p>
              
              <div className="cert-modal-details">
                <div className="detail-item">
                  <span className="detail-lbl">Completion Date</span>
                  <span className="detail-val">{selectedCert.date}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-lbl">Recipient Identity</span>
                  <span className="detail-val">Neeraj Kumar</span>
                </div>
                <div className="detail-item">
                  <span className="detail-lbl">Credential Serial</span>
                  <span className="detail-val select-all">{selectedCert.credentialId}</span>
                </div>
              </div>

              <div className="cert-modal-actions">
                <a
                  href="https://verify.course.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-large"
                >
                  Verify Online <ExternalLink size={16} />
                </a>
                <button className="btn-secondary" onClick={() => setSelectedCert(null)}>
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
