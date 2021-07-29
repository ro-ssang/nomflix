import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Backdrop = styled.img``;
const Title = styled.h3``;
const Rating = styled.span``;

const Poster = ({ title, imgUrl, rating }) => {
  return (
    <>
      <Backdrop src={`https://image.tmdb.org/t/p/w300${imgUrl}`} alt={title} />
      <Title>{title}</Title>
      <Rating>⭐{rating}/10</Rating>
    </>
  );
};

export default Poster;

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  rating: PropTypes.number.isRequired,
};
