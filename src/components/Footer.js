import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <h2 className="thanks">You&apos;re awesome.</h2>
      <h3 className="regards">Warm Regards,</h3>
      <p className="signature">Matthew Ford</p>
      <nav className="footer-nav">
        <Link
          className={`nav-link ${activePath === '/' ? 'active' : ''}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`nav-link ${activePath === '/projects' ? 'active' : ''}`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`nav-link ${activePath === '/about' ? 'active' : ''}`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`nav-link ${activePath === '/contact' ? 'active' : ''}`}
          to="/contact"
        >
          Contact
        </Link>
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
