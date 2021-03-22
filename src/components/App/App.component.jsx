import React from 'react';

import Layout from '../Layout/Layout.component';
import Toolbar from '../Toolbar/Toolbar';
import VideoCard from '../VideoCard/VideoCard';

import { videosData } from '../data/videosData';

function App() {
  return (
    <Layout>
      <Toolbar />
      {videosData.items.map((video) => {
        return (
          <VideoCard
            thumbnail={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            description={video.snippet.description}
            key={video.id.videoId ? video.id.videoId : video.id.channelId}
          />
        );
      })}
    </Layout>
  );
}

export default App;
