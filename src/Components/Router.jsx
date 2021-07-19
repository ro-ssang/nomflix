import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import Tv from 'Routes/TV';
import Detail from 'Routes/Detail';
import Header from './Header';

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/tv" component={Tv} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
