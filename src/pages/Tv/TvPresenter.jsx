import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TvWrapper = styled.section``;

const TvPresenter = ({ loading, airingToday, popular, topRated, error }) => {
  return (
    <MainWrapper>
      <TvWrapper>TV</TvWrapper>
    </MainWrapper>
  );
};

export default TvPresenter;

TvPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  airingToday: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  topRated: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
