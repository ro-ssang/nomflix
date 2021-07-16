import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li``;

const SLink = styled(Link)`
  display: inline-block;
  width: 110px;
  line-height: 50px;
  text-align: center;
`;

const Header = () => {
  return (
    <SHeader>
      <NavList>
        <NavItem>
          <SLink to="/">Movies</SLink>
        </NavItem>
        <NavItem>
          <SLink to="/tv">TV</SLink>
        </NavItem>
        <NavItem>
          <SLink to="/search">Search</SLink>
        </NavItem>
      </NavList>
    </SHeader>
  );
};

export default Header;
