import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Layout } from './views/layout/Layout.jsx';
import { Homepage } from './views/homepage/Homepage.jsx';
import { Portfolio } from './views/portfolio/Portfolio.jsx';
import { Services } from './views/services/Services.jsx';
import { Contact } from './views/contact/Contact.jsx';
import { Admin } from './views/admin/Admin.jsx';

const routes = (
  <Router history={createBrowserHistory()}>
    <Route component={Layout}>
      <Route path="/" component={Homepage} />
      <Route path="/our-portfolio" component={Portfolio} />
      <Route path="/our-services" component={Services} />
      <Route path="/contact-us" component={Contact} />
      <Route path="/mushy-naners" component={Admin} />
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