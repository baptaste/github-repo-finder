// == Import npm
import React, { useState } from 'react';
import axios from 'axios';

// == Import
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';

// import data from '../../data/repos';

// == Composant
// const reposData = data.items;
const baseUrl = 'https://api.github.com/search/repositories?q';

const App = () => {
  const [searchValues, setSearchValues] = useState([]);
  const [baseRepos, setBaseRepos] = useState([]);
  const [totalReposCount, setTotalReposCount] = useState(0);
  const [currentRepoName, setCurrentRepoName] = useState('react');

  const [isError, setIsError] = useState(false);
  const [requestError, setRequestError] = useState('error');

  const toggleError = () => setIsError(!isError);

  const handleSearchChange = (e) => {
    setSearchValues(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const repoQuery = await axios.get(`${baseUrl}${searchValues}`);

      setBaseRepos(repoQuery.data.items);

      setTotalReposCount(repoQuery.data.total_count);

      setCurrentRepoName(searchValues);
    }
    catch (error) {
      toggleError();
      setRequestError(`Request failed with status code ${error.response.status}`);
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
      <Message
        repoName={currentRepoName}
        nbRepos={totalReposCount}
        isError={isError}
        errorMessage={requestError}
      />
      <Repos repos={baseRepos} />
    </div>
  );
};

// == Export
export default App;
