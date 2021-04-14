import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import VideoCard from './VideoCard';

it('renders card component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoCard />, div);
});

it('matches snapshot', () => {
  const tree = renderer
    .create(
      <VideoCard
        thumbnail="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo"
        title="This is the video title"
        description="This ist hen the video despcription"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
