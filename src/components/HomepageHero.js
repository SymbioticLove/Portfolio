import React from 'react';
import './HomepageHero.css';

const HomepageHero = () => {
    return (
        <section className="homepage-hero">
            <img src="https://placehold.co/400" className="author-image" />
            <h2 className="hero-certifications-title">Hey There!</h2>
            <p className="hero-description">
                I am a utility full-stack engineer, forged through unconventional training, with the adaptability and competence to work across development teams. My journey in the engineering field is characterized by practical application and production-quality work spanning the entire development process. While my prowess is prominently showcased in areas such as React, Python, and API creation and usage, my capabilities extend far beyond. With approximately 2000 hours of hands-on experience, I have developed job-ready proficiency in a wide array of disciplines that empowers me to conquer a diverse range of technical challenges.
            </p>
            <h3 className="hero-certifications-title">Skills</h3>
            <ul className="hero-skills">
                <li>React.js</li>
                <li>Python</li>
                <li>API's (Creation and Use, REST)</li>
                <li>System Administration</li>
                <li>Prompt Engineering and ML</li>
                <li>Static Webpages</li>
                <li>SEO</li>
                <li>Accessibility</li>
                <li>SaaS Platforms</li>
                <li>SQL</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Vue.js</li>
                <li>Angular</li>
                <li>Rust</li>
                <li>Electron</li>
                <li>Agile Kanban</li>
            </ul>
            <h3 className="hero-certifications-title">Certifications</h3>
            <p className="hero-certifications-description">
                HackerRank certifications for the above-listed skills. Invited by the EC-Council to certify for both intermediate and master CEH certifications.
            </p>
        </section>
    );
}

export default HomepageHero;