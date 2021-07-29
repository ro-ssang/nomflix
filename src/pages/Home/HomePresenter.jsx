import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HomeWrapper = styled.section``;

const HomePresenter = ({ loading, nowPlaying, upcoming, popular, error }) => {
  return (
    <MainWrapper>
      <HomeWrapper>Home</HomeWrapper>
    </MainWrapper>
  );
};

export default HomePresenter;

HomePresenter.propType = {
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  upcoming: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
