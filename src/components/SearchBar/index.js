import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit }) => (

  <form
    className="search-header__form"
    onSubmit={onSearchSubmit}
  >
    <Input
      icon="search"
      placeholder="Rechercher un repo..."
      focus
      value={searchValue}
      onChange={onSearchChange}
    />
  </form>

);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
