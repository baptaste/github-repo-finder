import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({
  searchValue, onSearchChange, onSearchSubmit, isLoading,
}) => (
  <form
    className="search-header__form"
    onSubmit={onSearchSubmit}
  >
    <Input
      icon="search"
      placeholder="Rechercher un repo..."
      focus
      loading={isLoading}
      value={searchValue}
      onChange={onSearchChange}
    />
  </form>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
