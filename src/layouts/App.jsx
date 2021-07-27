import HomeContainer from '@pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Route path="/" exact component={HomeContainer} />
    </Router>
  );
};
