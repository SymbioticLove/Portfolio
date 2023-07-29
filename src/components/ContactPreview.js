import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPreview.css';
import PropTypes from 'prop-types';

// Creating the functional component 'ContactPreview'
function ContactPreview({ scrollToTop }) {
  return (
    <div className="contact-preview-wrapper">
      {/* ContactPreview content */}
      <div className="contact-preview">
        {/* Section title */}
        <h2>Connect With Me</h2>

        {/* Introduction paragraph */}
        <p>
          I am always interested in new opportunities and challenges. Whether
          you have a question about my skills and experience, need assistance
          with your project, or just want to connect and chat, I&apos;d love to
          hear from you. Don&apos;t hesitate to drop me a line!
        </p>

        {/* Link to the full 'Contact' page */}
        <Link to="/Portfolio/contact">
          {/* Reach Out button */}
          <button className="contact-btn" onClick={scrollToTop}>
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
export default ContactPreview;
