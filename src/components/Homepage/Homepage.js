import React from 'react';
import HomepageHero from '../HomepageHero/HomepageHero';
import AboutPreview from '../AboutPreview/AboutPreview';
import ProjectPreview from '../ProjectPreview/ProjectPreview';
import Essay from '../Essay/Essay';
import ContactPreview from '../ContactPreview/ContactPreview';
import PropTypes from 'prop-types';

const Homepage = ({ scrollToTop }) => {
  // Homepage component rendering
  return (
    <main>
      {/* Hero section */}
      <section className="hero-section">
        {/* Render the HomepageHero component */}
        <HomepageHero />
      </section>

      {/* Project section */}
      <section className="project-preview">
        {/* Render the ProjectPreview component */}
        <ProjectPreview scrollToTop={scrollToTop} />
      </section>

      {/* About section */}
      <section className="about-preview">
        {/* Render the AboutPreview component */}
        <AboutPreview scrollToTop={scrollToTop} />
      </section>

      {/* Essay section */}
      <section className="Essay">
        {/* Render the Essay component */}
        <Essay />
      </section>

      {/* Contact section */}
      <section className="contact-preview">
        {/* Render the ContactPreview component */}
        <ContactPreview scrollToTop={scrollToTop} />
      </section>
    </main>
  );
};

Homepage.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

// Exporting the 'Homepage' component to be used in other parts of the application
export default Homepage;
