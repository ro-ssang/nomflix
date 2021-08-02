import MainWrapper from '@layouts/Main';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchForm = styled.form``;
const SeacrhInput = styled.input``;
const SearchButton = styled.button``;

const SearchPresenter = ({ term, onChange, onSubmit, loading, movies, shows, error }) => {
  return (
    <MainWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SeacrhInput type="text" placeholder="Searching for..." value={term} onChange={onChange} />
        <SearchButton type="submit">search</SearchButton>
      </SearchForm>
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
