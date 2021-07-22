import React from 'react';
import githubLogo from '../../assets/images/logo-github.png';

import Nav from '../Nav';

const Header = () => (
  <header className="search-header">
    <img
      src={githubLogo}
      alt="github logo"
      className="search-header__logo"
    />
    <h1 className="sitename">Repo Finder</h1>
    <Nav />
  </header>
);

export default Header;
