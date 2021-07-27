import GlobalStyle, { theme } from '@components/GlobalStyle';
import HomeContainer from '@pages/Home';
import SearchContainer from '@pages/Search';
import TvContainer from '@pages/Tv';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/tv" component={TvContainer} />
        <Route path="/search" component={SearchContainer} />
      </Router>
    </ThemeProvider>
  );
};
