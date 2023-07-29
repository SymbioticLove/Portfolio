import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // Get the current location from the React Router
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to determine if the link should have an active class
  const isLinkActive = linkPath => {
    // Check if the current path is exactly matching the link's path
    return currentPath === linkPath;
  };

  // Header component rendering
  return (
    <header className="header">
      {/* Title and subtitle */}
      <div>
        <h1 className="header-title">Matthew Ford</h1>
        <h3 className="header-subtitle">Utility Full-Stack Engineer</h3>
      </div>

      {/* Navigation links */}
      <nav className="header-nav">
        {/* Home link */}
        <Link
          className={`nav-link ${isLinkActive('/Portfolio') ? 'active' : ''}`}
          to="/Portfolio"
        >
          Home
        </Link>

        {/* Projects link */}
        <Link
          className={`nav-link ${
            isLinkActive('/Portfolio/projects') ? 'active' : ''
          }`}
          to="/Portfolio/projects"
        >
          Projects
        </Link>

        {/* About link */}
        <Link
          className={`nav-link ${
            isLinkActive('/Portfolio/about') ? 'active' : ''
          }`}
          to="/Portfolio/about"
        >
          About
        </Link>

        {/* Contact link */}
        <Link
          className={`nav-link ${
            isLinkActive('/Portfolio/contact') ? 'active' : ''
          }`}
          to="/Portfolio/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

// Exporting the 'Header' component to be used in other parts of the application
export default Header;
