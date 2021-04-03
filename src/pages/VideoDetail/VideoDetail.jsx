import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Video from '../../components/Video/Video';

// import { useFetch } from '../../utils/hooks/useFetch';

import './VideoDetail.css';

const KEY = process.env.REACT_APP_API_KEY;

function VideoDetail() {
  const [video, setVideo] = useState();
  const videoId = useParams();

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: videoId.id,
          key: KEY,
        },
      })
      .then((response) => {
        const items = response.data.items[0];
        console.log(items);
        console.log('renderizando111');
        const videoData = {
          id: videoId.id,
          title: items.snippet.title,
          channelTitle: items.snippet.channelTitle,
          description: items.snippet.description,
        };
        console.log('renderizando');
        setVideo(videoData);
      });
  }, []);

  if (video === undefined) return <h1>LOADING...</h1>;

  return (
    <div>
      <Video
        id={video.id}
        title={video.title}
        description={video.description}
        channelTitle={video.channelTitle}
      />
    </div>
  );
}

export default VideoDetail;
