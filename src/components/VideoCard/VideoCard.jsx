import React from 'react';

import './VideoCard.css';

const VideoCard = ({ thumbnail, title, description }) => (
  <div className="card">
    <img className="thumbnail" src={thumbnail} alt="" />
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{description}</div>
    </div>
  </div>
);

export default VideoCard;
