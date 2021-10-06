import React from 'react';
import githubLogo from '../../assets/images/logo-github.png';

import Nav from '../Nav';

const Header = ({ resetRepos }) => (
  <header className="search-header">
    <div className="search-header__title">
    <button type="button" className="search-header__btn" onClick={resetRepos}>
      <img
        src={githubLogo}
        alt="github"
        className="search-header__logo"
      />
    </button>
    <h1 className="sitename">Repo Finder</h1>
    </div>
    <Nav />
  </header>
);

export default Header;
