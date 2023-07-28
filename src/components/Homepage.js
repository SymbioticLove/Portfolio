import React from 'react';
import HomepageHero from './HomepageHero';
import AboutPreview from './AboutPreview';
import ProjectPreview from './ProjectPreview';
import Essay from './Essay';
import ContactPreview from './ContactPreview';

const Homepage = () => {
  // Homepage component rendering
  return (
    <main>
      {/* Hero section */}
      <section className="hero-section">
        {/* Render the HomepageHero component */}
        <HomepageHero />
      </section>

      {/* About section */}
      <section className="about-preview">
        {/* Render the AboutPreview component */}
        <AboutPreview />
      </section>

      {/* Project section */}
      <section className="project-preview">
        {/* Render the ProjectPreview component */}
        <ProjectPreview />
      </section>

      {/* Essay section */}
      <section className="Essay">
        {/* Render the Essay component */}
        <Essay />
      </section>

      {/* Contact section */}
      <section className="contact-preview">
        {/* Render the ContactPreview component */}
        <ContactPreview />
      </section>
    </main>
  );
};

// Exporting the 'Homepage' component to be used in other parts of the application
export default Homepage;
