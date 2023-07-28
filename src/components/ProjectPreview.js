import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectPreview.css";

const ProjectPreview = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
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

        if (Array.isArray(data)) {
          // Filter the specific repositories
          const repoNames = [
            "Demo-Product-Page",
            "React-Flask-Boilerplate",
            "Python-Web-Scraper",
            "Restaurant-POS-System",
            "Recipe-Bot-Training",
            "Portfolio",
          ];
          const filteredRepos = data.filter((repo) =>
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

  return (
    <div className="project-preview">
      <h1 className="project-title">Projects</h1>
      <p className="project-subtitle">
        My projects cover a wide range of engineering disciplines. Click below
        to learn more!
      </p>
      <Link to="/projects">
        <button className="explore-button">Explore Projects</button>
      </Link>
      <div className="project-list">
        {repos.map((repo) => (
          <div key={repo.id} className="project-item">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
