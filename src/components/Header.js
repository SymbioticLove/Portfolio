import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // Get the current location from the React Router
  const location = useLocation();
  const activePath = location.pathname;

  // Scroll to the top of the page when the active path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePath]);

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
          className={`nav-link ${activePath === '/' ? 'active' : ''}`}
          to="/"
        >
          Home
        </Link>

        {/* Projects link */}
        <Link
          className={`nav-link ${activePath === '/projects' ? 'active' : ''}`}
          to="/projects"
        >
          Projects
        </Link>

        {/* About link */}
        <Link
          className={`nav-link ${activePath === '/about' ? 'active' : ''}`}
          to="/about"
        >
          About
        </Link>

        {/* Contact link */}
        <Link
          className={`nav-link ${activePath === '/contact' ? 'active' : ''}`}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

// Exporting the 'Header' component to be used in other parts of the application
export default Header;
