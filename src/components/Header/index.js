import React from 'react';
import githubLogo from '../../assets/images/logo-github.png';

import Nav from '../Nav';

const Header = ({ resetRepos }) => (
  <header className="search-header">
    <button type="button" className="search-header__btn" onClick={resetRepos}>
      <img
        src={githubLogo}
        alt="github"
        className="search-header__logo"
      />
    </button>
    <h1 className="sitename">Repo Finder</h1>
    <Nav />
  </header>
);

export default Header;
