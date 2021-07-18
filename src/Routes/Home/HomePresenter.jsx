import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loading from 'Components/Loading';
import Message from 'Components/Message';

const Container = styled.main`
  padding: 0 30px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  if (loading) {
    return (
      <Container>
        <Loading></Loading>
      </Container>
    );
  }

  return (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {error && <Message color="#c0392b" text={error} />}
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
