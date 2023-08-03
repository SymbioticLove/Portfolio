import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  // Get the current location from the React Router
  const location = useLocation();
  const currentPath = location.pathname;
  const { headerTitle, headerSubtitle } = useSelector(
    state => state.about.header,
  );
  const { homeButton, projectsButton, aboutButton, contactButton } =
    useSelector(state => state.about.navigation);

  // Function to determine if the link should have an active class
  const isLinkActive = linkPath => {
    // Check if the current path is exactly matching the link's path
    // Additionally, make home link active by default on root ("/") path
    return (
      currentPath === linkPath ||
      (linkPath === '/Portfolio' && currentPath === '/')
    );
  };

  // Header component rendering
  return (
    <header className="header">
      {/* Title and subtitle */}
      <div>
        <h1 className="header-title">{headerTitle}</h1>
        <h3 className="header-subtitle">{headerSubtitle}</h3>
      </div>

      {/* Navigation links */}
      <nav className="header-nav">
        {/* Home link */}
        <Link
          className={`nav-link ${isLinkActive('/Portfolio') ? 'active' : ''}`}
          to="/Portfolio"
        >
          {homeButton}
        </Link>

        {/* Projects link */}
        <Link
          className={`nav-link ${
            isLinkActive('/Portfolio/projects') ? 'active' : ''
          }`}
          to="/Portfolio/projects"
        >
          {projectsButton}
        </Link>

        {/* About link */}
        <Link
          className={`nav-link ${
            isLinkActive('/Portfolio/about') ? 'active' : ''
          }`}
          to="/Portfolio/about"
        >
          {aboutButton}
        </Link>

        {/* Contact link */}
        <Link
          className={`nav-link ${
            isLinkActive('/Portfolio/contact') ? 'active' : ''
          }`}
          to="/Portfolio/contact"
        >
          {contactButton}
        </Link>
      </nav>
    </header>
  );
};

// Exporting the 'Header' component to be used in other parts of the application
export default Header;
