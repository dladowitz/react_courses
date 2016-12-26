import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import RouteSearch from './containers/route_search.js';

// import LocationShow from './containers/location_show.js';
// import PostsNew  from './components/posts_new.js';
// import PostsShow from './components/posts_show.js';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={RouteSearch} />
    {/* <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostsShow} /> */}
  </Route>
);
