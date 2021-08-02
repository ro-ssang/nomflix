import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from '@components/Loader';

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
const DetailWrapper = styled.div`
  display: flex;
  padding: 0 30px;
  width: 100%;
  max-width: 1440px;
  height: calc(100vh - 130px);
`;
const DetailPoster = styled.img`
  border-radius: 5px;
  box-shadow: 2px 3px 30px 20px ${(props) => props.theme.$black};
`;
const MetaData = styled.div`
  & {
    padding: 20px 30px;
  }
  & > h2 {
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: 700;
  }
  & > p {
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 1.4;
    opacity: 0.8;
  }
  .info {
    display: flex;
    margin-bottom: 8px;
    li {
      position: relative;
      display: flex;
      align-items: center;
      h3 {
        margin-right: 8px;
        font-size: 14px;
        opacity: 0.5;
      }
      span {
        font-weight: 600;
      }
      &:not(:last-child) {
        margin-right: 24px;
        &::after {
          content: '';
          position: absolute;
          right: -14px;
          top: 6px;
          width: 4px;
          height: 4px;
          background-color: ${(props) => props.theme.$white};
          border-radius: 50%;
          opacity: 0.5;
        }
      }
    }
  }
  .genres {
    display: flex;
    align-items: center;
    h3 {
      margin-right: 8px;
      font-size: 14px;
      opacity: 0.5;
    }
    li {
      position: relative;
      font-weight: 600;
      &:not(:last-child) {
        margin-right: 24px;
        &::after {
          content: '';
          position: absolute;
          right: -12px;
          top: 2px;
          width: 1px;
          height: 100%;
          background-color: ${(props) => props.theme.$white};
          opacity: 0.5;
        }
      }
    }
  }
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
          <DetailWrapper>
            <DetailPoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <MetaData>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <ul className="info">
                <li>
                  <h3>Runtime</h3>
                  <span>{movie.runtime} min</span>
                </li>
                <li>
                  <h3>Release at</h3>
                  <span>{movie.release_date.split('-').join('. ')}</span>
                </li>
                <li>
                  <h3>Rating</h3>
                  <span>{movie.vote_average}</span>
                </li>
              </ul>
              <ul className="genres">
                <h3>Genres</h3>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </MetaData>
          </DetailWrapper>
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
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
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
