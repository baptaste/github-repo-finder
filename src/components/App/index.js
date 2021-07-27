// == Import npm
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

// == Import
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

import Header from '../Header';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';
import Faq from '../Faq';
import Loading from '../Loading';

// == Composant
const baseUrl = 'https://api.github.com/search/repositories?q=';

const App = () => {
  // hooks
  const [searchValues, setSearchValues] = useState('');
  const [baseRepos, setBaseRepos] = useState([]);
  const [totalReposCount, setTotalReposCount] = useState(1028313);
  const [currentRepoName, setCurrentRepoName] = useState('javascript');
  const [currentPage, setCurrentPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [requestError, setRequestError] = useState('error');
  const [isLoading, setIsLoading] = useState(false);

  // FUNCTIONS

  const toggleError = () => setIsError(!isError);

  // search value onChange
  const handleSearchChange = (e) => {
    setSearchValues(e.target.value);
  };
  // searchbar submit
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const repoQuery = await axios.get(`${baseUrl}${searchValues}&sort=stars&order=desc&page=1&per_page=9`);

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
    // setSearchValues([]);
    setIsLoading(false);
  };
  // default results on landing
  const getDefaultReposOnLoad = async () => {
    setIsLoading(true);
    try {
      const defaultRepos = await axios.get(`${baseUrl}javascript&sort=stars&order=desc&page=1&per_page=9`);

      setBaseRepos(defaultRepos.data.items);
    }
    catch (error) {
      toggleError();
      setRequestError(`Request failed with status code ${error.response.status}`);
      throw new Error('Request failed', error);
    }
    setIsLoading(false);
  };

  // useEffect to load default repos on page landing
  useEffect(() => {
    getDefaultReposOnLoad();
  }, []);

  // load more results
  const handleShowMoreClick = async () => {
    setCurrentPage(currentPage + 1);
    // 1er cas, on a une value stockée dans le state
    if (searchValues) {
      console.log(`1er if : rendu spécifique avec ${searchValues} stockée dans le state`);
      try {
        const response = await axios.get(
          `${baseUrl}${searchValues}&sort=stars&order=desc&page=${currentPage + 1}&per_page=9`,
        );
        const newBaseRepos = [
          ...baseRepos,
          ...response.data.items,
        ];
        setBaseRepos(newBaseRepos);
      }
      catch (error) {
        toggleError();
        setRequestError(`Request failed with status code ${error.response.status}`);
        throw new Error('Request failed', error);
      }
    }
    // 2nd cas, on a pas de value renseignée, on fait un get avec 'javascript' comme valeur par défaut
    if (!searchValues) {
      console.log('2eme if : rendu par défault avec javascript comme value');
      const response = await axios.get(
        `${baseUrl}javascript&sort=stars&order=desc&page=${currentPage + 1}&per_page=9`,
      );
      const newBaseRepos = [
        ...baseRepos,
        ...response.data.items,
      ];
      setBaseRepos(newBaseRepos);
    }
  };

  return (
    <div className="app">
      <Header />
      <Route exact path="/">
        <SearchBar
          searchValue={searchValues}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          isLoading={isLoading}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Message
              repoName={currentRepoName}
              nbRepos={totalReposCount}
              isError={isError}
              errorMessage={requestError}
            />
            <Repos
              repos={baseRepos}
              handleShowMoreClick={handleShowMoreClick}
            />
          </>
        ) }
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
    </div>
  );
};

// == Export
export default App;
