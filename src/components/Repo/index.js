/* eslint-disable camelcase */
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({
  id, name, description, html_url, owner, stargazers_count,
}) => (
  <a href={html_url} target="_blank" rel="noreferrer" key={id}>
    <Card
      className="repo"
      style={{
        wordWrap: 'break-word',
      }}
      image={owner.avatar_url}
      header={name}
      meta={owner.login}
      description={(
        <p className="repo__description">
          {description}
        </p>
        )}
      extra={(
        <p>
          <Icon name="star" />
          {stargazers_count} Étoiles
        </p>
      )}
    />
  </a>
);

Repo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repo;
