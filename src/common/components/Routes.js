import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import LoginPage from '../../pages/login/page';
import HomePage from '../../pages/home/page';
import TopicPage from '../../pages/topic/page';
import BookListPage from '../../pages/booklist/page';

export default (
	<Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/topic/:id" component={TopicPage} />
      <Route path="/booklist/:id" component={BookListPage} />
    </Route>

);
  // <Route path="/" component={App}>
  //   <IndexRoute component={LoginPage} />
  //   <Route path="home" component={HomePage} />
  // </Route>