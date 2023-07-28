import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Hi there! My name is Matthew Ford, and I&apos;m a passionate web
        developer. If you have any questions or concerns, feel free to reach
        out. I&apos;m always excited to discuss new opportunities and
        collaborate on interesting projects.
      </p>
      <p>
        Whether you are an employer looking to schedule an interview or a client
        in need of assistance with your freelance projects, I&apos;m here to
        help. Let&apos;s create something amazing together!
      </p>
      <div className="signature2">Matthew Ford</div>
      <div className="contact-buttons">
        <a href="mailto:matthew@symbiotic.love" className="email-button">
          Email Me
        </a>
        <a href="tel:+19124381768" className="call-button">
          Call Me
        </a>
      </div>
      <p>
        Thank you for visiting my website and taking the time to explore my
        work. I appreciate your interest and look forward to connecting with you
        soon!
      </p>
    </div>
  );
};

export default Contact;
