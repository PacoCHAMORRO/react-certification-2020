import React from 'react';
import ReactDOM from 'react-dom';

import DrawerToggleButton from './DrawerToggleButton';

it('renders button component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DrawerToggleButton />, div);
});