import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ scrollToTop }) => {
  // Get the current location from the React Router
  const location = useLocation();
  const activePath = location.pathname;

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
          className={`nav-link ${activePath === '/Portfolio' ? 'active' : ''}`}
          to="/Portfolio"
          onClick={scrollToTop}
        >
          Home
        </Link>

        {/* Projects link */}
        <Link
          className={`nav-link ${
            activePath === '/Portfolio/projects' ? 'active' : ''
          }`}
          to="/Portfolio/projects"
          onClick={scrollToTop}
        >
          Projects
        </Link>

        {/* About link */}
        <Link
          className={`nav-link ${
            activePath === '/Portfolio/about' ? 'active' : ''
          }`}
          to="/Portfolio/about"
          onClick={scrollToTop}
        >
          About
        </Link>

        {/* Contact link */}
        <Link
          className={`nav-link ${
            activePath === '/Portfolio/contact' ? 'active' : ''
          }`}
          to="/Portfolio/contact"
          onClick={scrollToTop}
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

Footer.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

// Exporting the 'Footer' component to be used in other parts of the application
export default Footer;
