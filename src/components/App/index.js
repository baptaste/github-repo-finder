// == Import npm
import React, { useState } from 'react';

// == Import
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';

import data from '../../data/repos';

// == Composant
const reposData = data.items;

const App = () => {
  const [searchValues, setSearchValues] = useState([]);
  const [baseRepos, setBaseRepos] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValues(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!');
    setBaseRepos(searchValues);
  };

  return (
    <div className="app">
      <SearchBar
        searchValue={searchValues}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Message />
      <Repos repos={reposData} />
    </div>
  );
};

// == Export
export default App;
