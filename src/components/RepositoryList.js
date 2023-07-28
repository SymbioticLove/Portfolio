import React from 'react';
import './RepositoryList.css';

const RepositoryList = ({ repos, onRepoSelect }) => {
    return (
        <div className='repository-list'>
            {Array.isArray(repos) && repos.map(repo => (
                <div key={repo.id} onClick={() => onRepoSelect(repo)} className='repository-list-item'>
                    <h2>{repo.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default RepositoryList;