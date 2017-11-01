import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PostDetails from './PostDetails';
import NewPost from './NewPost';
import Me from './Me';

const Content = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component= {Home} />
      <Route path="/about" component= {About} />
      <Route path="/post-detail" component= {PostDetails} />
      <Route path="/new-post" component= {NewPost} />
      <Route path="*" status={404} component={Me} />
    </Switch>
  );
};

export default Content;