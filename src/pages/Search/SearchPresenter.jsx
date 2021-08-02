import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchWrapper = styled.section``;

const SearchPresenter = ({ term, onChange, onSubmit, loading, movies, shows, error }) => {
  return (
    <MainWrapper>
      <SearchWrapper>Search</SearchWrapper>
    </MainWrapper>
  );
};

export default SearchPresenter;

SearchPresenter.propTypes = {
  term: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    }),
  ),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
};
