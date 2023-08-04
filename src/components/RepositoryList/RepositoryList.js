import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RepositoryList.css';

const RepositoryList = ({ repos, onRepoSelect }) => {
  const [selectedRepoId, setSelectedRepoId] = useState(null);

  const handleRepoSelect = repo => {
    setSelectedRepoId(repo.id);
    onRepoSelect(repo);
  };

  // Define the list of favorite repository names
  const favorites = [
    'Portfolio',
    'PortfolioPrime',
    'PrimeNative',
    'Built-Demo-Product-Page',
    'Restaurant-POS-System',
    'Recipe-Bot-Training',
  ];

  // Filter the repositories based on the favorites list
  const favoriteRepos = repos.filter(repo => favorites.includes(repo.name));

  // Filter the repositories to get the non-favorite ones
  const otherRepos = repos.filter(repo => !favorites.includes(repo.name));

  return (
    <div className="repository-list">
      <div className="favorites-section">
        <h2 className="favorite-h2" id="Favorite-Projects">
          Favorites
        </h2>
        {/* Render the list of favorite repositories */}
        {favoriteRepos.map(repo => (
          <div
            key={repo.id}
            onClick={() => handleRepoSelect(repo)}
            className={`repository-list-item ${
              repo.id === selectedRepoId ? 'selected' : ''
            }`}
          >
            <h2>{repo.name}</h2>
          </div>
        ))}
      </div>
      {/* Render the list of non-favorite repositories */}
      <div className="other-repos">
        <h2 className="favorite-h2" id="Other-Projects">
          Other Projects
        </h2>
        {otherRepos.map(repo => (
          <div
            key={repo.id}
            onClick={() => handleRepoSelect(repo)}
            className={`repository-list-item ${
              repo.id === selectedRepoId ? 'selected' : ''
            }`}
          >
            <h2>{repo.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

RepositoryList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onRepoSelect: PropTypes.func.isRequired,
};

export default RepositoryList;
