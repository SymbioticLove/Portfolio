import React from 'react';
import './HomepageHero.css';

const HomepageHero = () => {
  return (
    <section className="homepage-hero">
      <img
        src={process.env.PUBLIC_URL + '/us2.jpg'}
        className="author-image"
        alt="Author"
      />
      <h2 className="hero-certifications-title">
        Hey there. I&apos;m glad you&apos;re here!
      </h2>
      <p className="hero-description">
        I am a utility full-stack engineer, forged through unconventional
        training, with the adaptability and competence to work across
        development teams. My journey in the engineering field is characterized
        by practical application and production-quality work spanning the entire
        development process. While my prowess is prominently showcased in areas
        such as React, Python, and API creation and usage, my capabilities
        extend far beyond. With approximately 2000 hours of hands-on experience,
        I have developed job-ready proficiency in a wide array of disciplines
        that empowers me to conquer a diverse range of technical challenges.
      </p>
    </section>
  );
};

export default HomepageHero;
