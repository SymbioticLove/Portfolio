import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RepositoryDetails.css';
import ChartDisplay from '../ChartDisplay/ChartDisplay';

// Object containing colors for different programming languages
const languageColors = {
  Python: '#3572A5',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Ruby: '#701516',
  JavaScript: '#B8860B',
  Batchfile: '#008080',
  Shell: '#228B22',
};

const RepositoryDetails = ({ repo }) => {
  // State to hold the percentage of languages used in the repository
  const [languages, setLanguages] = useState([]);

  // Fetch the language distribution when the 'repo' prop changes
  useEffect(() => {
    const fetchLanguages = async () => {
      if (repo) {
        try {
          const response = await fetch(repo.languages_url);
          const data = await response.json();
          const total = Object.values(data).reduce((a, b) => a + b, 0);

          // Calculate the percentage of each language used in the repository
          const percentage = Object.fromEntries(
            Object.entries(data).map(([key, value]) => [
              key,
              ((value / total) * 100).toFixed(2) + '%',
            ]),
          );
          setLanguages(percentage);
        } catch (error) {
          console.error('Error fetching languages:', error);
          setLanguages([]);
        }
      }
    };

    fetchLanguages();
  }, [repo]);

  // If no repository is selected, render a message to select a repository
  if (!repo) {
    return (
      <div>
        <ChartDisplay />
        <div className="select-a-repo">Select a Repository to View Details</div>
        <p className="main-gh-link">
          {'Or visit the '}
          <a
            href="https://github.com/SymbioticLove"
            alt="Main portfolio link"
            className="main-gh"
            target="_blank"
            rel="noopener noreferrer"
          >
            main repository page →
          </a>
        </p>
      </div>
    );
  }

  // If a repository is selected, render its details
  return (
    <div className="repository-details">
      <h2 className="details-repo-title">{repo.name}</h2>
      <p className="details-descrip">{repo.description}</p>
      <div className="languages">
        Languages Distribution:
        {Object.entries(languages).map(([language, percent]) => {
          const color = languageColors[language] || '#000'; // Default to black if language color isn't defined
          return (
            <p key={language} style={{ color }}>
              {language}: {percent}
            </p>
          );
        })}
      </div>
      <div className="link-container">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
        <a href={repo.clone_url} target="_blank" rel="noopener noreferrer">
          Clone Repository →
        </a>
        {repo.homepage && (
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
            View at {repo.homepage} →
          </a>
        )}
      </div>
    </div>
  );
};

// PropTypes for type-checking the 'repo' prop
RepositoryDetails.propTypes = {
  repo: PropTypes.shape({
    languages_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    html_url: PropTypes.string,
    clone_url: PropTypes.string,
    homepage: PropTypes.string,
  }).isRequired,
};

// Exporting the 'RepositoryDetails' component to be used in other parts of the application
export default RepositoryDetails;
