import React, { useState } from 'react';
import { ReactComponent as Maginifier } from './magnifier.svg';

import './SearchBar.css';

function SearchBar(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <span>
        <Maginifier className="magnifier" />
      </span>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInput}
        value={searchText}
      />
    </form>
  );
}

export default SearchBar;
