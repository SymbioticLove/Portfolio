import React, { useState, useEffect } from "react";
import RepositoryList from "./RepositoryList";
import RepositoryDetails from "./RepositoryDetails";
import "./Repositories.css";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/SymbioticLove/repos",
        {
          headers: {
            Authorization: `token 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`,
          },
        },
      );
      let data = await response.json();

      // Ensure data is an array
      if (Array.isArray(data)) {
        data = data.filter((repo) => repo.name !== "SymbioticLove"); // Filter out "SymbioticLove" repository
        setRepos(data);
      } else {
        console.error("Unexpected data format:", data);
        setRepos([]); // Default to an empty array
      }
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setRepos([]); // Default to an empty array
    }
  };

  const handleRepoSelect = (repo) => {
    setSelectedRepo(repo);
  };

  return (
    <div className="repositories-container">
      <RepositoryList repos={repos} onRepoSelect={handleRepoSelect} />
      <div className="repository-details-container">
        {/* Use the repo ID as key if a repo is selected, otherwise use a static string */}
        <RepositoryDetails
          key={selectedRepo ? selectedRepo.id : "no-repo"}
          repo={selectedRepo}
        />
      </div>
    </div>
  );
};

export default Repositories;
