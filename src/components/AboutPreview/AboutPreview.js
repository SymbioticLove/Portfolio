import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './AboutPreview.css';
import PropTypes from 'prop-types';

const AboutPreview = ({ scrollToTop }) => {
  const { aboutPreviewTitle, aboutPreviewText } = useSelector(
    state => state.about.aboutPreview,
  );

  return (
    <div className="about-preview-container">
      <div className="about-preview">
        <h1 className="preview-title">{aboutPreviewTitle}</h1>
        <p className="preview-text">{aboutPreviewText}</p>
        <Link to="/Portfolio/about">
          <button className="preview-button" onClick={scrollToTop}>
            Learn More ⇒
          </button>
        </Link>
      </div>
    </div>
  );
};

AboutPreview.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default AboutPreview;
