import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Layout/Layout.component';
import Toolbar from '../Toolbar/Toolbar';
import HomePage from '../../pages/Home/Home.page';
import VideoDetail from '../../pages/VideoDetail/VideoDetail';

function App() {
  const [keyword, setKeyword] = useState('Wizeline');

  const onSearch = (text) => {
    setKeyword(text);
  };

  console.log(keyword);

  return (
    <Router>
      <Layout>
        <Toolbar onSearch={onSearch} />
        <Switch>
          <Route exact path="/video-detail/:id">
            <VideoDetail />
          </Route>
          <Route path="/">
            <HomePage keyword={keyword} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
