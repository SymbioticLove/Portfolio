import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

// Creating the functional component 'AboutPreview'
const AboutPreview = () => {
  return (
    <div className="about-preview-container">
      {/* AboutPreview content */}
      <div className="about-preview">
        {/* Title */}
        <h1 className="preview-title">About Me</h1>

        {/* Short preview text */}
        <p className="preview-text">
          A dedicated engineer with a passion for problem-solving, My journey in
          the tech industry is one worth knowing. Get to know more about me and
          my skills.
        </p>

        {/* Link to the full 'About' page */}
        <Link to="/Portfolio/about">
          {/* Learn More button */}
          <button className="preview-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

// Exporting the 'AboutPreview' component to be used in other parts of the application
export default AboutPreview;
