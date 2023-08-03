import React from 'react';
import './Contact.css';
import { useSelector } from 'react-redux';

const Contact = () => {
  const contactData = useSelector(state => state.about.contact);

  const {
    contactTitle,
    introduction,
    collaboration,
    emailButtonLabel,
    emailButtonHref,
    callButtonLabel,
    callButtonHref,
    closing,
    signature,
  } = contactData;

  return (
    <div className="contact">
      {/* Contact Me title */}
      <h1>{contactTitle}</h1>

      {/* Introduction paragraph */}
      <p>{introduction}</p>

      {/* Collaboration paragraph */}
      <p>{collaboration}</p>

      {/* Contact buttons */}
      <div className="contact-buttons">
        {/* Email button */}
        <a href={emailButtonHref} className="email-button">
          {emailButtonLabel}
        </a>

        {/* Call button */}
        <a href={callButtonHref} className="call-button">
          {callButtonLabel}
        </a>
      </div>

      {/* Closing paragraph */}
      <p>{closing}</p>

      {/* Signature */}
      <div className="signature2">{signature}</div>
    </div>
  );
};

export default Contact;
