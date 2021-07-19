import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loading from 'Components/Loading';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.main`
  padding: 0 30px;
  margin-top: 80px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  if (loading) {
    return (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              title={movie.title}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              rating={movie.vote_average}
              isMovie={true}
            />
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
