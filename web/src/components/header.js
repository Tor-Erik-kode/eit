import { StaticQuery, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import TocList from './tocList'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  z-index: 10;
`

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  :focus {
    outline: none
  }
  span {
    background: black;
    width: 2rem;
    height: 0.25rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  background: white;
  ul {
    list-style-type: none;
  }
`;

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, className }) => (
  <StaticQuery
    query={graphql`
    query NavQuery {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        ...ContentQuery
      }
    }
    `}
    render={data => (
      <StyledHeader className={className}>
        <div >
          <Link to='/'>{siteTitle}</Link>
        </div>

        <StyledBurger onClick={showNav ? onHideNav : onShowNav} open={showNav}>
          <span />
          <span />
          <span />
        </StyledBurger>

        <StyledMenu open={showNav}>
          <TocList />
        </StyledMenu>
      </StyledHeader>
    )}
  />
)

export default Header
