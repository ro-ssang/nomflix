import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 4px;
`;

const Rating = styled.span`
  position: absolute;
  right: 18px;
  bottom: 18px;
  opacity: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  overflow: hidden;
  display: block;
  margin: 8px 0;
  font-size: 18px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Year = styled.span`
  color: rgba(255, 255, 255, 0.4);
`;

const Poster = ({ id, imgUrl, title, year, rating, isMovie = false }) => {
  return (
    <Container>
      <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <ImageContainer>
          <Image
            src={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : require('assets/noPosterSmall.png').default}
            alt={title}
          />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐
            </span>{' '}
            {rating}/10
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Link>
    </Container>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  rating: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default Poster;
