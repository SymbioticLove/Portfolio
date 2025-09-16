import React from 'react';
import {  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ContactPreview.css';
import PropTypes from 'prop-types';

// Creating the functional component 'ContactPreview'
function ContactPreview({ scrollToTop }) {
  const { contactPreviewTitle, contactPreviewText } = useSelector(
    state => state.about.contactPreview,
  );

  return (
    <div className="contact-preview-wrapper">
      {/* ContactPreview content */}
      <div className="contact-preview">
        {/* Section title */}
        <h2>{contactPreviewTitle}</h2>

        {/* Introduction paragraph */}
        <p>{contactPreviewText}</p>

        {/* Link to the full 'Contact' page */}
        < to="/Portfolio/contact">
          {/* Reach Out button */}
          <button className="contact-btn" ={scrollToTop}>
            Reach Out ⇒
          </button>
        </Link>
      </div>
    </div>
  );
}

ContactPreview.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

// Exporting the 'ContactPreview' component to be used in other parts of the application
;
