// == Import npm
import React, { useState } from 'react';
import axios from 'axios';

// == Import
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';

import data from '../../data/repos';

// == Composant
const reposData = data.items;
const baseUrl = 'https://api.github.com/search/repositories?q=';

const App = () => {
  const [searchValues, setSearchValues] = useState([]);
  const [baseRepos, setBaseRepos] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValues(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const repoQuery = await axios.get(`${baseUrl}${searchValues}`);
      setBaseRepos(repoQuery.data.items);
    }
    catch (error) {
      throw new Error('Request failed', error);
    }
    // reset searchValue's state
    setSearchValues([]);
  };

  return (
    <div className="app">
      <SearchBar
        searchValue={searchValues}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Message />
      <Repos repos={baseRepos} />
    </div>
  );
};

// == Export
export default App;
