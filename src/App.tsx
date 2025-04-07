import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BasicInformation from './pages/BasicInformation';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">About Me</NavLink>
        <NavLink to="/work" className="nav-link">Work</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/resources" className="nav-link">Resources</NavLink>
        <NavLink to="/developer-setup" className="nav-link">Developer Setup</NavLink>
      </nav>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<BasicInformation />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/developer-setup" element={<DeveloperSetup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;