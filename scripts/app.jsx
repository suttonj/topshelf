import React from 'react';
import Router from 'react-router';

// import MainRouter from "./routers/main.jsx";
import getRoutes from './routes.js';

window.React = React;

//React.render(<MyComponent />, document.getElementById('content'));
var renderState = {
  element: document.getElementById('content'),
  Handler: null,
  routerState: null
};

let fetchData = function(routes, params) {
  let data = {};
  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData(params).then(resp => {     
console.log('data for ' + route.name + ' is: ');
console.dir(resp);
        data[route.name] = resp;
      })
    })
  ).then(() => data);
}


Router.run(getRoutes(), Router.HistoryLocation, function(Handler, state) {
  renderState.Handler = Handler;
  renderState.routerState = state;
  var { element, Handler, routerState } = renderState;

  fetchData(state.routes, state.params).then((data) => {
    React.render(<Handler data={data} />, element);
  });
});

