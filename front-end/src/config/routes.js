import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import PostContainer from '../containers/PostContainer';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/posts/:post_id' component={PostContainer} />
  </Switch>
)
