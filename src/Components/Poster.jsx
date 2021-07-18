import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.img``;

const Title = styled.span``;

const Year = styled.span``;

const Rating = styled.span``;

const Poster = ({ id, imgUrl, title, year, rating, isMovie = false }) => {
  return (
    <Container>
      <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Image src={imgUrl} alt={title} />
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{' '}
          {rating}/10
        </Rating>
      </Link>
    </Container>
  );
};

Poster.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  rating: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
