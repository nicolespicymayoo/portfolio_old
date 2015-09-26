import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Layout } from './views/layout/Layout.jsx';
import { Homepage} from './views/homepage/Homepage.jsx';

const routes = (
  <Router history={createBrowserHistory()}>
   <Route component={Layout}>
       <Route path="/" component={Homepage} />
     </Route>
  </Router>
);


Meteor.startup(() => {
  //Redering the view via React
  const rootElementName = 'react-root';
  let rootElement = document.getElementById(rootElementName);
  // In case the root element doesn't exist, let's create it
  if (!rootElement) {
    rootElement = document.createElement('div');
    rootElement.id = rootElementName;
    document.body.appendChild(rootElement);
  }

  React.render(routes, rootElement);
});