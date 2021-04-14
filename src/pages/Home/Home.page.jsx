import React from 'react';
import { Link } from 'react-router-dom';

import VideoCard from '../../components/VideoCard/VideoCard';

import { useFetch } from '../../utils/hooks/useFetch';

import './Home.styles.css';

function HomePage({ keyword }) {
  const [videosData] = useFetch(keyword);

  let videos = null;

  if (videosData) {
    videos = (
      <div className="card-link">
        {videosData.items.map((video) => {
          return (
            <Link
              to={`/video-detail/${video.id.videoId}`}
              className="link-to"
              key={video.id.videoId ? video.id.videoId : video.id.channelId}
            >
              <VideoCard
                thumbnail={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                description={video.snippet.description}
              />
            </Link>
          );
        })}
      </div>
    );
  }

  return videos;
}

export default HomePage;
