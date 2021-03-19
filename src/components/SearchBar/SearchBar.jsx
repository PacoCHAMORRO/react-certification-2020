import React from 'react';

import {ReactComponent as Maginifier} from './magnifier.svg';

import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className="search-bar">
            <span><Maginifier className="magnifier" /></span>
            <input type="text" name="" id=""/>
        </div>
    );
}

export default SearchBar;