import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderGit2, Award, MailOpen, Trash2, Plus, LogOut, Check, Edit2, ShieldCheck, Mail } from 'lucide-react';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('projects');
  
  // Projects states
  const [projects, setProjects] = useState([]);
  const [pTitle, setPTitle] = useState('');
  const [pCategory, setPCategory] = useState('');
  const [pDescription, setPDescription] = useState('');
  const [pLongDesc, setPLongDesc] = useState('');
  const [pColor, setPColor] = useState('#22d3ee');
  const [pFeatures, setPFeatures] = useState('');
  const [pTech, setPTech] = useState('');
  const [pGithub, setPGithub] = useState('');
  const [pLive, setPLive] = useState('');
  const [editProjectId, setEditProjectId] = useState(null);

  // Certificates states
  const [certificates, setCertificates] = useState([]);
  const [cTitle, setCTitle] = useState('');
  const [cIssuer, setCIssuer] = useState('');
  const [cDate, setCDate] = useState('');
  const [cId, setCId] = useState('');
  const [editCertId, setEditCertId] = useState(null);

  // Messages state
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Auth Check
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth !== 'true') {
      navigate('/login');
      return;
    }

    // Load Projects
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(storedProjects);

    // Load Certificates
    const storedCerts = JSON.parse(localStorage.getItem('certificates')) || [];
    setCertificates(storedCerts);

    // Load Messages
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, [navigate]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  // Projects CRUD Actions
  const handleProjectSubmit = (e) => {
    e.preventDefault();
    let updatedProjects;

    const featuresArray = pFeatures ? pFeatures.split(',').map(f => f.trim()) : [];
    const techArray = pTech ? pTech.split(',').map(t => t.trim()) : [];

    if (editProjectId) {
      updatedProjects = projects.map(p => 
        p.id === editProjectId ? { 
          ...p, 
          title: pTitle, 
          category: pCategory, 
          description: pDescription,
          longDescription: pLongDesc,
          color: pColor,
          features: featuresArray,
          tech: techArray,
          github: pGithub || 'https://github.com',
          live: pLive || 'https://vercel.com'
        } : p
      );
      setEditProjectId(null);
    } else {
      const newProject = {
        id: Date.now(),
        title: pTitle,
        category: pCategory,
        description: pDescription,
        longDescription: pLongDesc || pDescription,
        color: pColor,
        features: featuresArray.length ? featuresArray : ['Modular design', 'Stable operations'],
        tech: techArray.length ? techArray : ['React', 'CSS'],
        github: pGithub || 'https://github.com',
        live: pLive || 'https://vercel.com'
      };
      updatedProjects = [newProject, ...projects];
    }

    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    clearProjectForm();
  };

  const handleEditProject = (p) => {
    setEditProjectId(p.id);
    setPTitle(p.title);
    setPCategory(p.category);
    setPDescription(p.description);
    setPLongDesc(p.longDescription || '');
    setPColor(p.color || '#22d3ee');
    setPFeatures(p.features ? p.features.join(', ') : '');
    setPTech(p.tech ? p.tech.join(', ') : '');
    setPGithub(p.github || '');
    setPLive(p.live || '');
  };

  const handleDeleteProject = (id) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem('projects', JSON.stringify(updated));
  };

  const clearProjectForm = () => {
    setEditProjectId(null);
    setPTitle('');
    setPCategory('');
    setPDescription('');
    setPLongDesc('');
    setPColor('#22d3ee');
    setPFeatures('');
    setPTech('');
    setPGithub('');
    setPLive('');
  };

  // Certificates CRUD Actions
  const handleCertSubmit = (e) => {
    e.preventDefault();
    let updatedCerts;

    if (editCertId) {
      updatedCerts = certificates.map(c => 
        c.id === editCertId ? { ...c, title: cTitle, issuer: cIssuer, date: cDate, credentialId: cId } : c
      );
      setEditCertId(null);
    } else {
      const newCert = {
        id: Date.now(),
        title: cTitle,
        issuer: cIssuer,
        date: cDate,
        credentialId: cId || 'N/A'
      };
      updatedCerts = [newCert, ...certificates];
    }

    setCertificates(updatedCerts);
    localStorage.setItem('certificates', JSON.stringify(updatedCerts));
    clearCertForm();
  };

  const handleEditCert = (c) => {
    setEditCertId(c.id);
    setCTitle(c.title);
    setCIssuer(c.issuer);
    setCDate(c.date);
    setCId(c.credentialId);
  };

  const handleDeleteCert = (id) => {
    const updated = certificates.filter(c => c.id !== id);
    setCertificates(updated);
    localStorage.setItem('certificates', JSON.stringify(updated));
  };

  const clearCertForm = () => {
    setEditCertId(null);
    setCTitle('');
    setCIssuer('');
    setCDate('');
    setCId('');
  };

  // Messages Inbox Actions
  const handleToggleRead = (id) => {
    const updated = messages.map(m => m.id === id ? { ...m, read: !m.read } : m);
    setMessages(updated);
    localStorage.setItem('messages', JSON.stringify(updated));
  };

  const handleDeleteMessage = (id) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem('messages', JSON.stringify(updated));
  };

  return (
    <div className="admin-page-container">
      <div className="admin-dashboard-layout glass-panel">
        
        {/* Dashboard Sidebar */}
        <div className="admin-side-menu">
          <div className="admin-profile-headline">
            <ShieldCheck size={28} className="profile-shield" />
            <div className="profile-texts">
              <span className="profile-name">Neeraj Kumar</span>
              <span className="profile-badge">Workspace Owner</span>
            </div>
          </div>

          <div className="admin-menu-tabs">
            <button 
              className={`menu-tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <FolderGit2 size={16} /> Manage Projects
            </button>
            
            <button 
              className={`menu-tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              <Award size={16} /> Certifications
            </button>

            <button 
              className={`menu-tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <div className="tab-mail-label">
                <Mail size={16} /> 
                Manage Inbox
                {messages.filter(m => !m.read).length > 0 && (
                  <span className="inbox-badge-count">{messages.filter(m => !m.read).length}</span>
                )}
              </div>
            </button>
          </div>

          <button onClick={handleLogout} className="btn-secondary logout-menu-btn">
            <LogOut size={16} /> Log Out
          </button>
        </div>

        {/* Dashboard main console */}
        <div className="admin-main-console">
          
          {/* TAB 1: PROJECTS PANEL */}
          {activeTab === 'projects' && (
            <div className="panel-inner">
              <div className="panel-header">
                <h2>Manage Featured Projects</h2>
                <p>Add new case studies or edit existing projects in the local grid.</p>
              </div>

              <div className="panel-split-grid">
                {/* Form */}
                <form onSubmit={handleProjectSubmit} className="console-form glass-panel">
                  <h3>{editProjectId ? '✏️ Edit Project Details' : '➕ Add Featured Project'}</h3>
                  
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" value={pTitle} onChange={(e) => setPTitle(e.target.value)} placeholder="Nexus E-Commerce" required />
                  </div>

                  <div className="form-row-half">
                    <div className="form-group">
                      <label>Category</label>
                      <input type="text" value={pCategory} onChange={(e) => setPCategory(e.target.value)} placeholder="Full Stack / UIUX" required />
                    </div>
                    <div className="form-group">
                      <label>Accent Color</label>
                      <input type="color" value={pColor} onChange={(e) => setPColor(e.target.value)} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Short Description</label>
                    <input type="text" value={pDescription} onChange={(e) => setPDescription(e.target.value)} placeholder="Brief card summary description" required />
                  </div>

                  <div className="form-group">
                    <label>Detailed Case Description</label>
                    <textarea value={pLongDesc} onChange={(e) => setPLongDesc(e.target.value)} placeholder="Tell a complete story of features, database structure, APIs, and project scope..." required></textarea>
                  </div>

                  <div className="form-group">
                    <label>Key Features (comma separated list)</label>
                    <input type="text" value={pFeatures} onChange={(e) => setPFeatures(e.target.value)} placeholder="Auth JWT secure, Stripe checkout, Realtime graphs" />
                  </div>

                  <div className="form-group">
                    <label>Tech Stack Badges (comma separated)</label>
                    <input type="text" value={pTech} onChange={(e) => setPTech(e.target.value)} placeholder="React.js, Node.js, Express, MongoDB" />
                  </div>

                  <div className="form-row-half">
                    <div className="form-group">
                      <label>Source Code URL</label>
                      <input type="url" value={pGithub} onChange={(e) => setPGithub(e.target.value)} placeholder="https://github.com/..." />
                    </div>
                    <div className="form-group">
                      <label>Live URL Link</label>
                      <input type="url" value={pLive} onChange={(e) => setPLive(e.target.value)} placeholder="https://vercel.com/..." />
                    </div>
                  </div>

                  <div className="form-actions-inline">
                    <button type="submit" className="btn-primary-large console-submit">
                      {editProjectId ? 'Update Project' : 'Publish Project'}
                    </button>
                    {editProjectId && (
                      <button type="button" onClick={clearProjectForm} className="btn-secondary">
                        Cancel
                      </button>
                    )}
                  </div>
                </form>

                {/* Listing */}
                <div className="console-listing-box">
                  <h3>Active Portfolio Grid ({projects.length})</h3>
                  <div className="console-items-scrollable">
                    {projects.length === 0 ? (
                      <div className="empty-listing">No projects in grid. Add one on the left.</div>
                    ) : (
                      projects.map(p => (
                        <div className="console-item-row glass-panel" key={p.id}>
                          <div className="row-item-details">
                            <span className="row-item-bullet" style={{ backgroundColor: p.color }}></span>
                            <div className="row-item-text">
                              <h4>{p.title}</h4>
                              <span>{p.category}</span>
                            </div>
                          </div>
                          <div className="row-item-actions">
                            <button onClick={() => handleEditProject(p)} className="action-row-btn edit" title="Edit details">
                              <Edit2 size={13} />
                            </button>
                            <button onClick={() => handleDeleteProject(p.id)} className="action-row-btn delete" title="Delete from grid">
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CERTIFICATIONS PANEL */}
          {activeTab === 'certificates' && (
            <div className="panel-inner">
              <div className="panel-header">
                <h2>Manage Professional Credentials</h2>
                <p>Create, update, or remove online certifications visible in your About page timeline.</p>
              </div>

              <div className="panel-split-grid">
                {/* Form */}
                <form onSubmit={handleCertSubmit} className="console-form glass-panel">
                  <h3>{editCertId ? '✏️ Edit Certificate' : '➕ Add Certificate'}</h3>

                  <div className="form-group">
                    <label>Certification Name</label>
                    <input type="text" value={cTitle} onChange={(e) => setCTitle(e.target.value)} placeholder="Full Stack Web Training" required />
                  </div>

                  <div className="form-group">
                    <label>Issuing Institution</label>
                    <input type="text" value={cIssuer} onChange={(e) => setCIssuer(e.target.value)} placeholder="Interaction Design Foundation" required />
                  </div>

                  <div className="form-row-half">
                    <div className="form-group">
                      <label>Completion Date</label>
                      <input type="text" value={cDate} onChange={(e) => setCDate(e.target.value)} placeholder="Dec 2025" required />
                    </div>
                    <div className="form-group">
                      <label>Credential Serial ID</label>
                      <input type="text" value={cId} onChange={(e) => setCId(e.target.value)} placeholder="IDF-8294715-UIUX" />
                    </div>
                  </div>

                  <div className="form-actions-inline">
                    <button type="submit" className="btn-primary-large console-submit">
                      {editCertId ? 'Update Certificate' : 'Publish Certificate'}
                    </button>
                    {editCertId && (
                      <button type="button" onClick={clearCertForm} className="btn-secondary">
                        Cancel
                      </button>
                    )}
                  </div>
                </form>

                {/* List */}
                <div className="console-listing-box">
                  <h3>Active Credentials Timeline ({certificates.length})</h3>
                  <div className="console-items-scrollable">
                    {certificates.length === 0 ? (
                      <div className="empty-listing">No certificates found. Add one on the left.</div>
                    ) : (
                      certificates.map(c => (
                        <div className="console-item-row glass-panel" key={c.id}>
                          <div className="row-item-details">
                            <span className="row-item-bullet cert"></span>
                            <div className="row-item-text">
                              <h4>{c.title}</h4>
                              <span>{c.issuer} • {c.date}</span>
                            </div>
                          </div>
                          <div className="row-item-actions">
                            <button onClick={() => handleEditCert(c)} className="action-row-btn edit" title="Edit certificate">
                              <Edit2 size={13} />
                            </button>
                            <button onClick={() => handleDeleteCert(c.id)} className="action-row-btn delete" title="Delete from timeline">
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MESSAGES INBOX */}
          {activeTab === 'messages' && (
            <div className="panel-inner">
              <div className="panel-header">
                <h2>Client Inquiries & Messages</h2>
                <p>Review contact forms submitted by prospective clients and viewers.</p>
              </div>

              <div className="console-full-width-listing">
                {messages.length === 0 ? (
                  <div className="empty-inbox glass-panel">
                    <MailOpen size={36} className="empty-inbox-icon" />
                    <h3>Inbox is currently empty</h3>
                    <p>Submitted contact forms will automatically appear in this feed.</p>
                  </div>
                ) : (
                  <div className="messages-inbox-stack">
                    {messages.map(m => (
                      <div className={`message-card-panel glass-panel ${!m.read ? 'unread' : ''}`} key={m.id}>
                        <div className="message-card-header">
                          <div className="sender-meta">
                            <h4>{m.name}</h4>
                            <a href={`mailto:${m.email}`}>{m.email}</a>
                          </div>
                          <span className="message-date">{m.date}</span>
                        </div>
                        
                        <div className="message-subject-line">
                          <strong>Subject:</strong> {m.subject}
                        </div>

                        <p className="message-body-text">{m.message}</p>

                        <div className="message-card-actions">
                          <button 
                            onClick={() => handleToggleRead(m.id)} 
                            className={`message-action-btn ${m.read ? 'mark-unread' : 'mark-read'}`}
                          >
                            <Check size={14} /> {m.read ? 'Mark as Unread' : 'Mark as Read'}
                          </button>
                          <button 
                            onClick={() => handleDeleteMessage(m.id)} 
                            className="message-action-btn delete"
                          >
                            <Trash2 size={14} /> Delete message
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Admin;
