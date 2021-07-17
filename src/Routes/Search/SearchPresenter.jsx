import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from 'Components/Loading';
import Section from 'Components/Section';

const Container = styled.main`
  padding: 0 30px;
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
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map((show) => (
                <span key={show.id}>{show.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
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
