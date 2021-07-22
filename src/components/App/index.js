// == Import npm
import React from 'react';

// == Import
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Repos from '../Repos';

// == Composant
const App = () => (
  <div className="app">
    <SearchBar />
    <Message />
    <Repos />
  </div>
);

// == Export
export default App;
