import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

const SearchBar = ({
  searchValue, onSearchChange, onSearchSubmit, isLoading, onSearchTag
}) => {

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  const cleanValue = DOMPurify.sanitize(searchValue, {ALLOWED_TAGS: ['em', 'strong']});
  const [isTagsVisible, setIsTagsVisible] = useState(false);
  const [isTagClicked, setIsTagClicked] = useState(false);
  const toggleTags = () => {
    setIsTagsVisible(!isTagsVisible);
    setIsTagClicked(!isTagClicked)
  }

  const languages = [
    { key: 'JavaScript' },
    { key: 'HTML' },
    { key: 'CSS' },
    { key: 'Python' },
    { key: 'SQL' },
    { key: 'Java' },
    { key: 'Node.js' },
    { key: 'TypeScript' },
    { key: 'C#' },
    { key: 'PHP' },
    { key: 'Go' },
    { key: 'Kotlin' },
    { key: 'Rust' },
    { key: 'Ruby' },
  ];

  const frameworks = [
    { key: 'React', isTagsVisible: false },
    { key: 'Vue', isTagsVisible: false },
    { key: 'Angular', isTagsVisible: false },
    { key: 'jQuery', isTagsVisible: false },
    { key: 'Express', isTagsVisible: false },
    { key: 'Laravel', isTagsVisible: false },
    { key: 'Next', isTagsVisible: false },
    { key: 'Gatsby', isTagsVisible: false },
    { key: 'Nuxt', isTagsVisible: false },
    { key: 'Django', isTagsVisible: false },
    { key: 'Svelte', isTagsVisible: false },
    { key: 'ASP.NET', isTagsVisible: false },
    { key: 'Symfony', isTagsVisible: false },
  ]

  return (
    <form className="search-header__form" onSubmit={onSearchSubmit}>
    <Input
      icon="search"
      placeholder="Rechercher un repo, un utilisateur..."
      focus
      loading={isLoading}
      value={cleanValue.replace(regex)}
      onChange={onSearchChange}
    />
    <div className="tags">
      <div className="tags__button">
      {!isTagsVisible
        ? <button type="button" className="button tagsToggler" onClick={toggleTags}>+</button>
        : <button type="button" className="button tagsToggler" onClick={toggleTags}>-</button>}
      </div>
      <div className="tags__items">
        {languages.map((tag) => (
          <input
            type="submit"
            key={tag.key}
            value={tag.key}
            name={tag.key}
            onClick={(e) => onSearchTag(e, tag.key)}
            className="button tags__item"
          />
        ))}
      {/* </div>
      <div className="tags__items"> */}
      {isTagsVisible && frameworks.map((tag) => (
        <input
          type="submit"
          key={tag.key}
          value={tag.key}
          name={tag.key}
          onClick={(e) => onSearchTag(e, tag.key)}
          className="button tags__item"
        />
      ))}
    </div>

    </div>
  </form>
  )
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
