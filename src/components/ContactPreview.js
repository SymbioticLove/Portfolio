import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPreview.css';

function ContactPreview() {
  return (
    <div className="contact-preview-wrapper">
      <div className="contact-preview">
        <h2>Connect With Me</h2>
        <p>
          I am always interested in new opportunities and challenges. Whether
          you have a question about my skills and experience, need assistance
          with your project, or just want to connect and chat, I&apos;d love to
          hear from you. Don&apos;t hesitate to drop me a line!
        </p>
        <Link to="/contact">
          <button className="contact-btn">Reach Out</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactPreview;
