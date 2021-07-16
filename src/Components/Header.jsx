import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header``;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li``;

const SLink = styled(Link)``;

const Header = () => {
  return (
    <SHeader>
      <NavList>
        <NavItem>
          <SLink to="/">Home</SLink>
        </NavItem>
        <NavItem>
          <SLink to="/tv">Tv</SLink>
        </NavItem>
        <NavItem>
          <SLink to="/search">Search</SLink>
        </NavItem>
      </NavList>
    </SHeader>
  );
};

export default Header;
