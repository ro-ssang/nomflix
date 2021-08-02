import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from '@components/Loader';

const DetailWrapper = styled.div``;
const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100vh - 50px);
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.3;
  z-index: -10;
`;

const DetailPresenter = ({ loading, movie, show, error }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <MainWrapper>
      {movie && (
        <>
          <Backdrop imgUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
          <DetailWrapper>Movie detail page</DetailWrapper>
        </>
      )}
      {show && (
        <>
          <Backdrop imgUrl={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} />
          <DetailWrapper>Tv show detail page</DetailWrapper>
        </>
      )}
      {error && error.message}
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
