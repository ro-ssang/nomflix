import Header from '@components/Header';
import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main``;

export default ({ children }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};
