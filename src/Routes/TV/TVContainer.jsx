import React, { Component } from 'react';
import TVPresenter from './TVPresenter';

class TVContainer extends Component {
  state = {
    airingToday: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { airingToday, topRated, popular, error, loading } = this.state;

    return (
      <TVPresenter airingToday={airingToday} topRated={topRated} popular={popular} error={error} loading={loading} />
    );
  }
}

export default TVContainer;
