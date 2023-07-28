import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  // Get the current location from the React Router
  const location = useLocation();
  const activePath = location.pathname;

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Footer component rendering
  return (
    <footer className="footer">
      {/* Footer heading */}
      <h2 className="thanks">You&apos;re awesome.</h2>
      <h3 className="regards">Warm Regards,</h3>
      <p className="signature">Matthew Ford</p>

      {/* Footer navigation */}
      <nav className="footer-nav">
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

        {/* Back to Top button */}
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      </nav>
    </footer>
  );
};

// Exporting the 'Footer' component to be used in other parts of the application
export default Footer;
