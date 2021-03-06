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


const baseUrl = 'https://api.github.com/search/repositories?q=';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [baseRepos, setBaseRepos] = useState([]);
  const [totalReposCount, setTotalReposCount] = useState(1028313);
  const [currentRepoName, setCurrentRepoName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [requestError, setRequestError] = useState('error');
  const [isLoading, setIsLoading] = useState(false);
  const [tag, setTag] = useState('');

  const toggleError = () => setIsError(!isError);

  // search value onChange
  const handleSearchChange = (e) => {
    setTag('');
    setSearchValue(e.target.value);
  };
  // set tag value onclick and call submit
  const handleSearchTag = (e, targetTag) => {
    setSearchValue('');
    setTag(targetTag);

    handleSearchSubmit(e, targetTag);
  };
  // searchbar submit
  const handleSearchSubmit = async (e, targetTag) => {
    e.preventDefault();

      try {
        setIsLoading(true);

        if (searchValue && !tag) {
          const repoQuery = await axios.get(`${baseUrl}${searchValue}&sort=stars&order=desc&page=1&per_page=9`);
          setBaseRepos(repoQuery.data.items);
          setTotalReposCount(repoQuery.data.total_count);
          setCurrentRepoName(searchValue);
          setCurrentPage(1);
        }

        if (targetTag && !searchValue) {
          const repoQuery = await axios.get(`${baseUrl}${targetTag}&sort=stars&order=desc&page=1&per_page=9`);
          setBaseRepos(repoQuery.data.items);
          setTotalReposCount(repoQuery.data.total_count);
          setCurrentRepoName(targetTag);
          setCurrentPage(1);
        }
      }

      catch (error) {
        toggleError();
        setRequestError(`Request failed with status code ${error.response.status}`);
        throw new Error('Request failed', error);
      }
      setIsLoading(false);
  };
  // default results on landing
  const getDefaultReposOnLoad = async () => {
    setIsLoading(true);
    try {
      const defaultRepos = await axios.get(`${baseUrl}javascript&sort=stars&order=desc&page=1&per_page=9`);

      setBaseRepos(defaultRepos.data.items);
      setTotalReposCount(defaultRepos.data.total_count);
    }
    catch (error) {
      toggleError();
      setRequestError(`Request failed with status code ${error.response.status}`);
      throw new Error('Request failed', error);
    }
    setSearchValue('');
    setTag('');
    setCurrentRepoName('');
    setCurrentPage(1);
    setIsLoading(false);
  };

  // useEffect to load default repos on page landing
  useEffect(() => {
    getDefaultReposOnLoad();
  }, []);

  // load more results
  const handleShowMoreClick = async () => {
    // increment currentPage by 1
    setCurrentPage(currentPage + 1);
    // lets define a default perpage value to 9
    const perpage = 9;

    if (currentRepoName) {
      try {
        const response = await axios.get(
          `${baseUrl}${currentRepoName}&sort=stars&order=desc&page=${currentPage + 1}&per_page=${perpage}`,
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

    // default, with javascript, perpage is equal to 9
    if (!currentRepoName) {
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
      <Header resetRepos={getDefaultReposOnLoad} />
      <Route exact path="/">
        <SearchBar
          searchValue={searchValue}
          onSearchTag={handleSearchTag}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          isLoading={isLoading}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <>
          {currentRepoName &&
            <Message
              repoName={currentRepoName}
              nbRepos={totalReposCount}
              repos={baseRepos}
              currentPage={currentPage}
              isError={isError}
              errorMessage={requestError}
            />
          }
            <Repos
              repos={baseRepos}
              nbRepos={totalReposCount}
              handleShowMoreClick={handleShowMoreClick}
              resetRepos={getDefaultReposOnLoad}
            />
          </>
        ) }
      </Route>
      <Route exact path="/faq">
        <Faq />
      </Route>
    </div>
  );
};

export default App;
