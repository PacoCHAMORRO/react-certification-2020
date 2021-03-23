import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;

function useVideo(searchVideo = 'Radiohead') {
  const [videoList, setVideoList] = useState(null);
  console.log(API_KEY);
  const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&q=${encodeURI(
    searchVideo
  )}&type=video&key=${API_KEY}`;

  console.log(API_URL);

  useEffect(() => {
    const fetchVideos = () => {
      axios.get(API_URL).then((response) => {
        const data = { ...response.data };
        setVideoList(data);
        console.log(data);
      });
    };
    fetchVideos();
  }, [API_URL]);

  return videoList;
}

export { useVideo };
