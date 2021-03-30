import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SearchBar from '../SearchBar/SearchBar';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import LoginButton from '../LoginButton/LoginButton';

import './Toolbar.css';

function Toolbar(props) {
  const { onSearch } = props;

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <DrawerToggleButton />
        <SearchBar onSearch={onSearch} />
        <div className="spacer" />
        <ToggleSwitch>Dark Mode</ToggleSwitch>
        <LoginButton />
      </nav>
    </header>
  );
}

export default Toolbar;
