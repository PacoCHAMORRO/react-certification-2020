import React from 'react';

import './ToggleSwitch.css';

function ToggleSwitch({ children }) {
  return (
    <div className="switch-container">
      <label className="switch" htmlFor="toggled">
        <input type="checkbox" id="toggled" />
        <span className="slider round" />
      </label>
      <span className="switch-label">{children}</span>
    </div>
  );
}

export default ToggleSwitch;
