import React from 'react';

import './ToggleSwitch.css';

function ToggleSwitch(props) {
  return (
    <div className="switch-container">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <span>Dark Mode</span>
    </div>
  );
}

export default ToggleSwitch;
