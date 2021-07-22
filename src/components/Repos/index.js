import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo';

const Repos = ({ repos }) => (
  <main className="repos">
    {repos.map((repo) => (
      <Repo
        key={repo.id}
        {...repo}
      />
    ))};
  </main>
);

Repos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Repos;