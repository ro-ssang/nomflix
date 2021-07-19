import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from 'Components/Loading';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.main`
  padding: 0 30px;
  margin-top: 80px;
`;

const Form = styled.form`
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSumbit, updateTerm }) => {
  return (
    <Container>
      <Form onSubmit={handleSumbit}>
        <Input type="text" value={searchTerm} placeholder="Search Movies or TV Shows..." onChange={updateTerm} />
      </Form>
      {loading ? (
        <Loading />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date && movie.release_date.substring(0, 4)}
                  rating={movie.vote_average}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imgUrl={show.poster_path}
                  title={show.name}
                  year={show.first_air_date && show.first_air_date.substring(0, 4)}
                  rating={show.vote_average}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message color="#95a5a6" text={error} />}
    </Container>
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
