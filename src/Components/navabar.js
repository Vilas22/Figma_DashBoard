import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #000; /* Figma-like background color */
  color: #fff;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  z-index: 1000; /* Ensure it's above other content */
  transition: transform 0.3s ease-in-out; /* Add smooth transition for animation */

  /* Adjust transform for animation */
//   transform: translateX(${props => (props.open ? '0' : '-250px')});
`;

const NavTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 10px;
`;

const NavLinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffeb3b; /* Change color on hover */
  }
`;

const SideNav = ({ open }) => {
  return (
    <NavWrapper open={open}>
      <NavTitle>Dashboard</NavTitle>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/investors">Investors</NavLinkStyled>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default SideNav;
