import React from 'react';

import './Video.css';

function Video({ id, title, channelTitle, description }) {
  console.log(id);
  return (
    <div className="video-player">
      <h1>{title}</h1>
      <h4>{channelTitle}</h4>
      <iframe
        title="video"
        width="100%"
        height="460"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Video;

/* Copy account */
