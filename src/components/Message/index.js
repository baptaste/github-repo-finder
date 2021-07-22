import React from 'react';
import PropTypes from 'prop-types';

const Message = ({
  nbRepos, repoName, isError, errorMessage,
}) => (
  <div className="message">
    {isError
      ? <p className="message__error">{errorMessage}</p>
      : <p>{nbRepos} résultats trouvés pour la recherche {repoName}</p>}
  </div>
);

Message.propTypes = {
  nbRepos: PropTypes.number.isRequired,
  repoName: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Message;
