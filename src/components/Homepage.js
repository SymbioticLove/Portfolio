import React from 'react';
import './Homepage.css';
import HomepageHero from './HomepageHero';
// import AboutPreview from './AboutPreview';
// import ProjectPreview from ./ProjectPreview';
import Essay from './Essay';
import ContactPreview from './ContactPreview';

const Homepage = () => {
    return (
        <main>
            <section className="hero-section">
                <HomepageHero />
            </section>
            <section className="about-preview">
                {/* <AboutPreview /> */}
            </section>
            <section className="project-preview">
                {/* <ProjectPreview /> */}
            </section>
            <section className="Essay">
                <Essay />
            </section>
            <section className="contact-preview">
                {<ContactPreview />}
            </section>
        </main>
    );
}

export default Homepage;