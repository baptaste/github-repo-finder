import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({
  searchValue, onSearchChange, onSearchSubmit, isLoading,
}) => {
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  return (
    <form
    className="search-header__form"
    onSubmit={onSearchSubmit}
  >
    <Input
      icon="search"
      placeholder="Rechercher un repo, un utilisateur..."
      focus
      loading={isLoading}
      value={searchValue.replace(regex)}
      onChange={onSearchChange}
    />
  </form>
  )
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
