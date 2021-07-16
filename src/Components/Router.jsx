import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from 'Routes/Home';
import Movie from 'Routes/Movie';
import Search from 'Routes/Search';
import Tv from 'Routes/Tv';

const Router = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/movie" component={Movie} />
      <Route path="/search" component={Search} />
      <Route path="/tv" component={Tv} />
    </HashRouter>
  );
};

export default Router;
