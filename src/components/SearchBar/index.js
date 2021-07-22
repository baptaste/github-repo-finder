import React from 'react';
import { Input } from 'semantic-ui-react';
import githubLogo from '../../assets/images/logo-github.png';

const SearchBar = () => (
  <header className="search-header">
    <img src={githubLogo} alt="github logo" className="search-header__logo" />
    <form className="search-header__form">
      <Input
        icon="search"
        placeholder="Rechercher un repo..."
        focus
      />
    </form>
    <div className="search-header__results">La recherche a donné 5647496 résulats</div>
  </header>
);

export default SearchBar;
