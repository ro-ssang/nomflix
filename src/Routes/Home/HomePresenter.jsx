import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';

const Container = styled.main`
  padding: 0 30px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  if (loading) {
    return null;
  }

  return (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">{nowPlaying.map((movie) => movie.title)}</Section>
      )}
      {popular && popular.length > 0 && <Section title="Popular">{popular.map((movie) => movie.title)}</Section>}
      {upcoming && upcoming.length > 0 && <Section title="Upcoming">{upcoming.map((movie) => movie.title)}</Section>}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
