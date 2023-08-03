import React, { useState, useEffect } from 'react';
import RepositoryList from '../RepositoryList/RepositoryList';
import RepositoryDetails from '../RepositoryDetails/RepositoryDetails';
import './Repositories.css';

const Repositories = () => {
  // State to hold the fetched repositories
  const [repos, setRepos] = useState([]);

  // State to keep track of the selected repository
  const [selectedRepo, setSelectedRepo] = useState(null);

  // Fetch repositories from the GitHub API on component mount
  useEffect(() => {
    fetchRepos();
  }, []);

  // Function to fetch repositories from the GitHub API
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

      // Ensure data is an array
      if (Array.isArray(data)) {
        // Filter out the "SymbioticLove" repository
        data = data.filter(repo => repo.name !== 'SymbioticLove');
        setRepos(data);
      } else {
        console.error('Unexpected data format:', data);
        setRepos([]); // Default to an empty array
      }
    } catch (error) {
      console.error('Error fetching repositories:', error);
      setRepos([]); // Default to an empty array
    }
  };

  // Function to handle selection of a repository
  const handleRepoSelect = repo => {
    setSelectedRepo(repo);
  };

  // Repositories component rendering
  return (
    <div className="repositories-container">
      {/* Render the RepositoryList component */}
      <RepositoryList repos={repos} onRepoSelect={handleRepoSelect} />

      <div className="repository-details-container">
        {/* Use the repo ID as key if a repo is selected, otherwise use a static string */}
        {/* Render the RepositoryDetails component */}
        <RepositoryDetails
          key={selectedRepo ? selectedRepo.id : 'no-repo'}
          repo={selectedRepo}
        />
      </div>
    </div>
  );
};

// Exporting the 'Repositories' component to be used in other parts of the application
export default Repositories;
