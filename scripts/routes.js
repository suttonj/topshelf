import React from 'react';
import { DefaultRoute, Route, NotFoundRoute } from "react-router";

import App from "./components/application.jsx";
import MyComponent from "./components/mycomponent.jsx";
import BookList from "./components/booklist.jsx";

export default function() {

  return (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute handler={MyComponent} />
      <Route name="booklist" path="booklist/:id" handler={BookList} />
    </Route>
  )
}

