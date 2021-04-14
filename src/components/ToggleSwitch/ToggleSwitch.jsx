import React from 'react';

import './ToggleSwitch.css';

function ToggleSwitch() {
  return (
    <div className="switch-container">
      <label className="switch" htmlFor="theme">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <span>Dark Mode</span>
    </div>
  );
}

export default ToggleSwitch;
