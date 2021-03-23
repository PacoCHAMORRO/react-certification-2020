import React from 'react';

import Layout from '../Layout/Layout.component';
import Toolbar from '../Toolbar/Toolbar';
import VideoCard from '../VideoCard/VideoCard';

import { useVideo } from '../../utils/hooks/useVideo';

function App() {
  const videosData = useVideo();

  return (
    <Layout>
      <Toolbar />
      {videosData
        ? videosData.items.map((video) => {
            return (
              <VideoCard
                thumbnail={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                description={video.snippet.description}
                key={video.id.videoId ? video.id.videoId : video.id.channelId}
              />
            );
          })
        : null}
    </Layout>
  );
}

export default App;
