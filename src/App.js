import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { HomePage, BlogHome, NotFound, Page, Post, Preview, PreOrder } from './pages';
import { apiEndpoint } from './prismic-configuration';

/**
 * Main app component
 */
const App = () => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
    <Fragment>
      <Helmet>
      
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/preview' component={Preview} />
          <Route exact path='/preorder' component={PreOrder} />
          <Route exact path='/:uid' component={Page} />
          <Route exact path='/my/:uid' component={BlogHome} />
          <Route exact path='/journal/:uid' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
