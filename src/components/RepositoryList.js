import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RepositoryList.css';

const RepositoryList = ({ repos, onRepoSelect }) => {
  // State to keep track of the selected repository ID
  const [selectedRepoId, setSelectedRepoId] = useState(null);

  // Function to handle selecting a repository
  const handleRepoSelect = repo => {
    setSelectedRepoId(repo.id); // Update the selectedRepoId state with the ID of the selected repository
    onRepoSelect(repo); // Call the onRepoSelect prop function with the selected repository
  };

  return (
    <div className="repository-list">
      {/* Check if the 'repos' prop is an array and map through each repository */}
      {Array.isArray(repos) &&
        repos.map(repo => (
          // Create a div for each repository with its name as the content
          // Add an onClick event to call the handleRepoSelect function when a repository is clicked
          // Apply the 'selected' class to the selected repository to highlight it
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

// PropTypes for type-checking the 'repos' and 'onRepoSelect' props
RepositoryList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onRepoSelect: PropTypes.func.isRequired,
};

// Exporting the 'RepositoryList' component to be used in other parts of the application
export default RepositoryList;
