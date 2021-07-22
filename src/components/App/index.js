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

  const handleSearchChange = (e) => {
    setSearchValues(e.target.value);
  };

  return (
    <div className="app">
      <SearchBar
        searchValue={searchValues}
        onSearchChange={handleSearchChange}
      />
      <Message />
      <Repos repos={reposData} />
    </div>
  );
};

// == Export
export default App;
