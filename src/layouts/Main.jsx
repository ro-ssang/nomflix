import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main``;

export default ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};