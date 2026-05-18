import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth !== 'true') {
      navigate('/login');
      return;
    }

    // Load projects
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [
      { id: 1, title: 'Nexus Fintech App', category: 'UI/UX Design', description: 'Banking app redesign.', color: '#00f2fe' },
      { id: 2, title: 'Aura E-Commerce', category: 'Visual Design', description: 'Luxury fashion brand.', color: '#7928ca' },
      { id: 3, title: 'Pulse Dashboard', category: 'Product Design', description: 'SaaS data visualization.', color: '#ff007f' }
    ];
    setProjects(storedProjects);
    localStorage.setItem('projects', JSON.stringify(storedProjects));
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedProjects;
    
    if (editId) {
      updatedProjects = projects.map(p => 
        p.id === editId ? { ...p, title, category, description } : p
      );
      setEditId(null);
    } else {
      const newProject = {
        id: Date.now(),
        title,
        category,
        description,
        color: '#00f2fe' // Default color
      };
      updatedProjects = [...projects, newProject];
    }
    
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setTitle('');
    setCategory('');
    setDescription('');
  };

  const handleEdit = (project) => {
    setEditId(project.id);
    setTitle(project.title);
    setCategory(project.category);
    setDescription(project.description);
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-secondary">Logout</button>
      </div>
      
      <div className="admin-grid">
        {/* Form */}
        <div className="admin-form-container">
          <h2>{editId ? 'Edit Project' : 'Add New Project'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Project Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit" className="btn-primary-large">
              {editId ? 'Update Project' : 'Add Project'}
            </button>
            {editId && (
              <button type="button" onClick={() => { setEditId(null); setTitle(''); setCategory(''); setDescription(''); }} className="btn-secondary" style={{marginLeft: '1rem'}}>
                Cancel
              </button>
            )}
          </form>
        </div>
        
        {/* List */}
        <div className="admin-list-container">
          <h2>Manage Projects</h2>
          <div className="admin-list">
            {projects.map(project => (
              <div className="admin-item" key={project.id}>
                <div className="admin-item-info">
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
                <div className="admin-item-actions">
                  <button onClick={() => handleEdit(project)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDelete(project.id)} className="btn-delete">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
