import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProjectPreview.css';
import PropTypes from 'prop-types';

const ProjectPreview = ({ scrollToTop }) => {
  // State to hold the fetched repositories
  const [repos, setRepos] = useState([]);
  const { projectPreviewTitle, projectPreviewSubtitle } = useSelector(
    state => state.about.projectPreview,
  );

  useEffect(() => {
    // Fetching repositories from GitHub API
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/SymbioticLove/repos',
          {
            headers: {
              Authorization: ``, // Placeholder for any required authentication
            },
          },
        );
        let data = await response.json();

        if (Array.isArray(data)) {
          // Filter the specific repositories
          const repoNames = [
            'Demo-Product-Page',
            'React-Flask-Boilerplate',
            'PortfolioPrime',
            'Restaurant-POS-System',
            'Recipe-Bot-Training',
            'Portfolio',
          ];
          const filteredRepos = data.filter(repo =>
            repoNames.includes(repo.name),
          );
          setRepos(filteredRepos);
        } else {
          setRepos([]);
        }
      } catch (error) {
        setRepos([]);
      }
    };

    fetchRepos();
  }, []);

  // ProjectPreview component rendering
  return (
    <div className="project-preview">
      {/* Project title */}
      <h1 className="project-title">{projectPreviewTitle}</h1>

      {/* Project subtitle */}
      <p className="project-subtitle">
        {/* Description of projects */}
        {projectPreviewSubtitle}
      </p>

      {/* Project list */}
      <div className="project-list">
        {repos.map(repo => (
          <div key={repo.id} className="project-item">
            {/* Project name */}
            <h2>{repo.name}</h2>

            {/* Project description */}
            <p>{repo.description}</p>

            {/* Link to the project on GitHub */}
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
      {/* Link to explore all projects */}
      <Link to="/Portfolio/projects">
        <button className="explore-button" onClick={scrollToTop}>
          Explore All Projects ⇒
        </button>
      </Link>
    </div>
  );
};

ProjectPreview.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

// Exporting the 'ProjectPreview' component to be used in other parts of the application
export default ProjectPreview;
