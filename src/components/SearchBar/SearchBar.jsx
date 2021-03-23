import React from 'react';

import { ReactComponent as Maginifier } from './magnifier.svg';

import './SearchBar.css';

function SearchBar() {
  return (
    <form onSubmit="" className="search-bar">
      <span>
        <Maginifier className="magnifier" />
      </span>
      <input type="text" name="searchTerm" />
    </form>
  );
}

export default SearchBar;
