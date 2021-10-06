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
      <button type="button" onClick={resetRepos} className="repos__show-more-btn">Retour</button>
    }
    {repos.length !== 0 && nbRepos >= 10 && repos.length !== nbRepos &&
    <>
      <button type="button" onClick={handleShowMoreClick} className="repos__show-more-btn">
        Plus de résultats
      </button>
      <p>{repos.length} sur {nbRepos}</p>
    </>
    }
    {repos.length !== 0 && repos.length === nbRepos &&
      <p>Tous les repos sont affichés pour cette recherche.</p>
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
