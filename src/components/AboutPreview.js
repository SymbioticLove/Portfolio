import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

const AboutPreview = () => {
  return (
    <div className="about-preview-container">
      <div className="about-preview">
        <h1 className="preview-title">About Me</h1>
        <p className="preview-text">
          A dedicated engineer with a passion for problem-solving, My journey in
          the tech industry is one worth knowing. Get to know more about me and
          my skills.
        </p>
        <Link to="/about">
          <button className="preview-button">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPreview;
