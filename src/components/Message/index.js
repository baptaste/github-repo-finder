import React from 'react';
import PropTypes from 'prop-types';

const Message = ({
  repos, nbRepos, repoName, currentPage
}) => {
  const totalPages = Math.round(nbRepos / 9);

  return (
    <div className="messages">
      {repoName !== '' && repos.length !== 0 &&
      <div className="message">
        <p>
          <strong>{nbRepos.toLocaleString()} </strong>résultats pour <strong> {repoName}</strong>
        </p>
        <p>Page {currentPage} - {totalPages}</p>
      </div>
      }
      {repos.length === 0 &&
        <div className="message">
          <p>Aucun résultat trouvé pour "{repoName}"</p>
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
