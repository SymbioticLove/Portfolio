import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import './HomepageHero.css';

const HomepageHero = () => {
  const { heroTitle, heroText } = useSelector(
    state => state.about.homepageHero,
  );

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'sine.in',
      },
    );
  }, []);

  return (
    <section className="homepage-hero">
      {/* Hero certifications title */}
      <div className="hero-title-container">
        <h2 className="hero-certifications-title">{heroTitle}</h2>

        {/* Hero description */}
        <p className="hero-description">
          {/* Content about the author */}
          {heroText}
        </p>
      </div>

      {/* Author image */}
      <img
        ref={imageRef}
        src={`${process.env.PUBLIC_URL}/me.jpg`}
        className="author-image"
        alt="Author"
      />
    </section>
  );
};

// Exporting the 'HomepageHero' component to be used in other parts of the application
export default HomepageHero;
