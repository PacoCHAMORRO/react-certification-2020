import React from 'react';
import { ReactComponent as MenuIcon } from './menu.svg';

import './DrawerToggleButton.css';

function DrawerToggleButton() {
  return (
    <div className="menu-container">
      <MenuIcon className="menu-icon" />
    </div>
  );
}

export default DrawerToggleButton;
