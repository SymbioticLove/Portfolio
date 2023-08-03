import React from 'react';
import { useSelector } from 'react-redux';
import './HomepageHero.css';

const HomepageHero = () => {
  const { heroTitle, heroText } = useSelector(
    state => state.about.homepageHero,
  );
  return (
    <section className="homepage-hero">
      {/* Author image */}
      <img
        src={`${process.env.PUBLIC_URL}/me.jpg`}
        className="author-image"
        alt="Author"
      />

      {/* Hero certifications title */}
      <h2 className="hero-certifications-title">{heroTitle}</h2>

      {/* Hero description */}
      <p className="hero-description">
        {/* Content about the author */}
        {heroText}
      </p>
    </section>
  );
};

// Exporting the 'HomepageHero' component to be used in other parts of the application
export default HomepageHero;
