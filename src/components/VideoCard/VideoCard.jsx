import React from 'react';

import './VideoCard.css';

const VideoCard = ({ thumbnail, title, description }) => (
  <div className="card">
    <div className="thumbnail-container">
      <img className="thumbnail" src={thumbnail} alt="Video snippet" />
    </div>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default VideoCard;
