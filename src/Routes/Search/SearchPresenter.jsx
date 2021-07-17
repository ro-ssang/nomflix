import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading }) => {
  return (
    <>
      <div>Search</div>
    </>
  );
};

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
