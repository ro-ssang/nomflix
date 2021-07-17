import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  font-size: 30px;
`;

const Loading = () => {
  return (
    <Container>
      <span role="img" aria-label="Loading">
        ⏰
      </span>
    </Container>
  );
};

export default Loading;
