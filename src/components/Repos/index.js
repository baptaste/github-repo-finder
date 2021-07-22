import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo';

const Repos = ({ repos, handleShowMoreClick }) => (
  <main className="repos">
    {repos.map((repo) => (
      <Repo
        key={repo.id}
        {...repo}
      />
    ))};
    <button
      type="button"
      onClick={handleShowMoreClick}
      className="repos__show-more-btn"
    >
      Plus de résultats
    </button>
  </main>
);

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
