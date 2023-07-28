import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePath]);

  return (
    <header className="header">
      <div>
        <h1 className="header-title">Matthew Ford</h1>
        <h3 className="header-subtitle">Utility Full-Stack Engineer</h3>
      </div>
      <nav className="header-nav">
        <Link
          className={`nav-link ${activePath === "/" ? "active" : ""}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`nav-link ${activePath === "/projects" ? "active" : ""}`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`nav-link ${activePath === "/about" ? "active" : ""}`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`nav-link ${activePath === "/contact" ? "active" : ""}`}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
