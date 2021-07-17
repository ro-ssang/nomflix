import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

const Title = styled.h2`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 700;
`;

const Grid = styled.div``;

const Section = ({ children, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string.isRequired,
};

export default Section;
