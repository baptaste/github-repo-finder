import React from 'react';
import PropTypes from 'prop-types';

const Message = ({
  repos, nbRepos, repoName, searchValues, currentPage
}) => {
  const totalPages = Math.round(nbRepos / 9);

  return (
    <div className="messages">
      {repoName === '' &&
      <div className="message">
        <p>Exemple pour Javascript</p>
        <p>Page {currentPage} - {totalPages}</p>
      </div>
      }
      {repoName !== '' && repos.length !== 0 &&
      <div className="message">
        <p>
          <strong>{nbRepos.toLocaleString()} </strong>résultats trouvés pour la recherche<strong> {repoName}</strong>
        </p>
        <p>Page {currentPage} - {totalPages}</p>
      </div>
      }
      {repos.length === 0 &&
        <div className="message">
          <p>Aucun résultat trouvé pour "{searchValues}"</p>
      </div>
      }
  </div>
  );
};

Message.propTypes = {
  nbRepos: PropTypes.number.isRequired,
  repoName: PropTypes.string.isRequired,
};

export default Message;
