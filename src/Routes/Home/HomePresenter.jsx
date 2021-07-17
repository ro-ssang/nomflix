import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return (
    <>
      <div>Home</div>
    </>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
