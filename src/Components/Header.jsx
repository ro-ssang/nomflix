import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(20, 20, 20, 1);
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
  border-bottom: 2px solid ${(props) => (props.$current ? '#3498db' : 'transparent')};
  line-height: 50px;
  text-align: center;
  transition: border-bottom 0.5s;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <SHeader>
      <NavList>
        <NavItem>
          <SLink to="/" $current={pathname === '/'}>
            Movies
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/tv" $current={pathname === '/tv'}>
            TV
          </SLink>
        </NavItem>
        <NavItem>
          <SLink to="/search" $current={pathname === '/search'}>
            Search
          </SLink>
        </NavItem>
      </NavList>
    </SHeader>
  );
};

export default withRouter(Header);
