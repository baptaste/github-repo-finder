// == Import npm
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// == Import
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';
import Faq from '../Faq';

// import data from '../../data/repos';

// == Composant
// const reposData = data.items;
const baseUrl = 'https://api.github.com/search/repositories?q=';

const App = () => {
  const [searchValues, setSearchValues] = useState([]);
  const [baseRepos, setBaseRepos] = useState([]);
  const [totalReposCount, setTotalReposCount] = useState(1028313);
  const [currentRepoName, setCurrentRepoName] = useState('javascript');

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

  const getDefaultReposOnLoad = async () => {
    try {
      const defaultRepos = await axios.get(`${baseUrl}javascript`);
      setBaseRepos(defaultRepos.data.items);
    }
    catch (error) {
      toggleError();
      setRequestError(`Request failed with status code ${error.response.status}`);
      throw new Error('Request failed', error);
    }
  };

  useEffect(() => {
    getDefaultReposOnLoad();
  }, []);

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
      <Route exact path="/">
        <Repos repos={baseRepos} />
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
    </div>
  );
};

// == Export
export default App;
