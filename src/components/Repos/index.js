import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo';

const Repos = ({ repos, nbRepos, resetRepos, handleShowMoreClick }) => {
  return (
    <main className="repos">
    {repos.map((repo) => (
      <Repo
        key={repo.id}
        {...repo}
      />
    ))}
    {repos.length === 0 &&
      <button type="button" onClick={resetRepos} className="button--main">Retour</button>
    }
    {repos.length !== 0 && nbRepos >= 10 && repos.length !== nbRepos &&
    <div className="repos__footer">
      <button type="button" onClick={handleShowMoreClick} className="button--main">
        Plus de résultats
      </button>
      <p className="repos__footer-index">{repos.length} sur {nbRepos}</p>
    </div>
    }
    {repos.length !== 0 && repos.length === nbRepos &&
      <p>Tous les résultats sont affichés.</p>
    }
  </main>
  )
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  handleShowMoreClick: PropTypes.func.isRequired,
};

export default Repos;
