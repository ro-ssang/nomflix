import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DetailWrapper = styled.div``;

const DetailPresenter = ({ loading, movie, show, error }) => {
  return (
    <MainWrapper>
      <DetailWrapper>Detail page</DetailWrapper>
    </MainWrapper>
  );
};

export default DetailPresenter;

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    runtime: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  show: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
    episode_runtime: PropTypes.arrayOf(PropTypes.number),
    first_air_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
