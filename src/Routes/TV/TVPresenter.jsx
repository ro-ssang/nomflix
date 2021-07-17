import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section';
import Loading from 'Components/Loading';

const Container = styled.main`
  padding: 0 30px;
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
        <Section title="Top Rated Shows">{topRated.map((show) => show.name)}</Section>
      )}
      {popular && popular.length > 0 && <Section title="Popular Shows">{popular.map((show) => show.name)}</Section>}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">{airingToday.map((show) => show.name)}</Section>
      )}
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
