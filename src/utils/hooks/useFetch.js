import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = process.env.REACT_APP_API_KEY;

function useFetch(searchVideo) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 18,
          q: encodeURI(searchVideo),
          type: 'video',
          key: KEY,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, [searchVideo]);

  return [data];
}

export { useFetch };
