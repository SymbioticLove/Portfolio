import React from 'react';
import { useSelector } from 'react-redux';
import CertCarousel from '../CertCarousel/CertCarousel';
import './About.css';

const About = () => {
  const { aboutTitle, personalDetails, myJourney, skills } = useSelector(
    state => state.about.about,
  );

  // Function to replace keywords with links in the paragraph
  const renderParagraphWithLinks = paragraph => {
    const portfolioLink = 'https://github.com/SymbioticLove/Portfolio';
    const portfolioPrimeLink =
      'https://github.com/SymbioticLove/PortfolioPrime';

    const updatedParagraph = paragraph
      .replace(
        /this portfolio/g,
        `<a href="${portfolioLink}" target="_blank" rel="noopener noreferrer" class="port-links">this portfolio</a>`,
      )
      .replace(
        /PortfolioPrime/g,
        `<a href="${portfolioPrimeLink}" target="_blank" rel="noopener noreferrer" class="port-links">PortfolioPrime</a>`,
      );

    return (
      <p
        className="story-text"
        dangerouslySetInnerHTML={{ __html: updatedParagraph }}
      />
    );
  };

  return (
    <div className="about-section">
      {/* About Me title */}
      <h1 className="about-title">{aboutTitle}</h1>

      <div className="about-content">
        {/* Profile picture */}
        <img
          className="about-image"
          src={`${process.env.PUBLIC_URL}/me-gray.jpg`}
          alt="Matthew Ford"
        />
        <div className="about-details">
          {/* Personal Details section */}
          <h2 className="details-title">Personal Details</h2>
          <p className="details-info">Location: {personalDetails.location}</p>
          <p className="details-info">Languages: {personalDetails.languages}</p>
          <p className="details-info">
            Contact:
            <a href={`tel:${personalDetails.contact.phone}`}>
              {personalDetails.contact.phone}
            </a>{' '}
            |{' '}
            <a href={`mailto:${personalDetails.contact.email}`}>
              {personalDetails.contact.email}
            </a>
          </p>
        </div>

        <div className="about-story">
          {/* My Journey section */}
          <h2 className="story-title">My Journey</h2>
          {myJourney.story.map((paragraph, index) => (
            <React.Fragment key={index}>
              {renderParagraphWithLinks(paragraph)}
            </React.Fragment>
          ))}
          <p className="story-links">
            {/* Links to business website and shop */}
            <a
              href={myJourney.links.businessWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Business Website
            </a>{' '}
            |{' '}
            <a
              href={myJourney.links.shop}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop
            </a>
          </p>
        </div>

        <div className="about-skills">
          {/* Skills section */}
          <h2 className="skills-title">Skills</h2>
          <ul className="skills-list">
            {/* List of skills */}
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <CertCarousel />
    </div>
  );
};

// Exporting the 'About' component to be used in other parts of the application
export default About;
