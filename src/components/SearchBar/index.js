import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import githubLogo from '../../assets/images/logo-github.png';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit }) => (
  <header className="search-header">
    <img
      src={githubLogo}
      alt="github logo"
      className="search-header__logo"
    />
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
  </header>
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
