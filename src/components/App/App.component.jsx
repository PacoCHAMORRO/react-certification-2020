import React, { useState } from 'react';

import Layout from '../Layout/Layout.component';
import Toolbar from '../Toolbar/Toolbar';
import VideoCard from '../VideoCard/VideoCard';

import { useFetch } from '../../utils/hooks/useFetch';

function App() {
  const [keyword, setKeyword] = useState('Wizeline');

  const [videosData] = useFetch(keyword);

  const onSearch = (text) => {
    setKeyword(text);
    console.log(videosData);
  };

  return (
    <Layout>
      <Toolbar onSearch={onSearch} />
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
