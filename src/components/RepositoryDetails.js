import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RepositoryDetails.css';

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
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      if (repo) {
        try {
          const response = await fetch(repo.languages_url);
          const data = await response.json();
          const total = Object.values(data).reduce((a, b) => a + b, 0);
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

  if (!repo) {
    return (
      <div>
        <div className="select-a-repo">Select a repository to view details</div>
        <p className="main-gh-link">
          {'Or vist the '}
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

  return (
    <div className="repository-details">
      <h2 className="details-repo-title">{repo.name}</h2>
      <p className="details-descrip">{repo.description}</p>
      <div className="languages">
        Languages Distribution:
        {Object.entries(languages).map(([language, percent]) => {
          const color = languageColors[language] || '#000'; // default to black if language color isn't defined
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

export default RepositoryDetails;
