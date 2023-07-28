// Importing the required modules
import React from 'react';
import './About.css';

// Creating the functional component 'About'
const About = () => {
  return (
    <div className="about-section">
      {/* About Me title */}
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        {/* Profile picture */}
        <img
          className="about-image"
          src="%PUBLIC_URL%/me.jpg"
          alt="Matthew Ford"
        />
        <div className="about-details">
          {/* Personal Details section */}
          <h2 className="details-title">Personal Details</h2>
          <p className="details-info">Location: Phoenix, AZ (UTC-7)</p>
          <p className="details-info">
            Languages: Native - English, Semi-fluent - Español/Deutsch
          </p>
          <p className="details-info">
            Contact:
            <a href="tel:+19124381768"> +1(912) 438-1768</a> |
            <a href="mailto:Matthew@symbiotic.love"> Matthew@symbiotic.love</a>
          </p>
        </div>

        <div className="about-story">
          {/* My Journey section */}
          <h2 className="story-title">My Journey</h2>
          <p className="story-text">
            {/* Personal story and experience */}
            My engineering journey began out of necessity to start my own
            business with my wife, Jessela. But along the way, I discovered a
            deep passion for the field, especially for full-stack engineering
            and architecture. Through dedicated effort, I&apos;ve amassed almost
            2000 practical hours and have become comfortable with any syntax,
            largely due to the advent of ChatGPT, which has become an integral
            tool in my work.
          </p>
          <p className="story-text">
            {/* More details about projects and skills */}
            I&apos;ve used my skills to create various projects and maintain our
            business systems, including our eCommerce platform on Shopify&apos;s
            Liquid framework, and our business site built with React. I have a
            diverse portfolio that showcases my skills in AI training, web
            design, Python scripting, and more. I also have research access to
            GPT4&apos;s API and have received invitations for certification from
            the EC-Council in light of my practical experience.
          </p>
          <p className="story-text">
            {/* Future goals */}
            On the business side, Jessela and I bootstrapped costs over $20,000
            to launch our eCommerce platform, with a focus on community impact
            and environmental consciousness. As we transition into the
            maintenance phase of our start-up, I&apos;m excited to deploy my
            newfound skills in the tech industry.
          </p>
          <p className="story-links">
            {/* Links to business website and shop */}
            <a
              href="https://symbiotic.love"
              target="_blank"
              rel="noopener noreferrer"
            >
              Business Website
            </a>{' '}
            |
            <a
              href="https://shop.symbiotic.love"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Shop
            </a>
          </p>
        </div>

        <div className="about-skills">
          {/* Skills section */}
          <h2 className="skills-title">Skills</h2>
          <ul className="skills-list">
            {/* List of skills */}
            <li>React.js</li>
            <li>Python</li>
            <li>API&apos;s (Creation and Use, REST)</li>
            <li>System Administration</li>
            <li>Prompt Engineering and ML</li>
            <li>HTML5</li>
            <li>CSS3</li>
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
        </div>
      </div>
    </div>
  );
};

// Exporting the 'About' component to be used in other parts of the application
export default About;
