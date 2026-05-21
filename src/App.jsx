import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ConstellationBackground from './components/ConstellationBackground';

// Helper component to manage smooth anchor scrolling on direct routing
const RouteScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    
    // Check if path represents an anchor section
    if (path === '/' || path === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionId = path.substring(1); // Remove leading slash
      const el = document.getElementById(sectionId);
      if (el) {
        // Delay slightly to ensure component render completes
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app">
        {/* Interactive canvas particles stars */}
        <ConstellationBackground />
        
        {/* Soft floating background radial blobs */}
        <div className="bg-blobs">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>
        </div>
        
        <Header />
        
        {/* Trigger scroll management on route changes */}
        <RouteScrollManager />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Route all secondary sections to home and let scroll manager auto-focus */}
            <Route path="/about" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
