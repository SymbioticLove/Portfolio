import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RepositoryList.css';

const RepositoryList = ({ repos, onRepoSelect }) => {
  const [selectedRepoId, setSelectedRepoId] = useState(null);

  const handleRepoSelect = repo => {
    setSelectedRepoId(repo.id);
    onRepoSelect(repo);
  };

  return (
    <div className="repository-list">
      {Array.isArray(repos) &&
        repos.map(repo => (
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
  );
};

RepositoryList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onRepoSelect: PropTypes.func.isRequired,
};

export default RepositoryList;
