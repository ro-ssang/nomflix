import React from 'react';
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

const TVPresenter = ({ airingToday, topRated, popular, error, loading }) => {
  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imgUrl={show.poster_path}
              title={show.name}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              rating={show.vote_average}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imgUrl={show.poster_path}
              title={show.name}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              rating={show.vote_average}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imgUrl={show.poster_path}
              title={show.name}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              rating={show.vote_average}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#c0392b" text={error} />}
    </Container>
  );
};

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
