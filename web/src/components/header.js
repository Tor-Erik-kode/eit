import { StaticQuery, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import TocList from './tocList'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: rgba(255,255,255, 0.9);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  
  a {
    text-decoration: none;
  }
`

const StyledBurger = styled.button`
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
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? '1' : '0'};
  position: absolute;
  top: 0; right:0;
  background-color: rgba(255,255,255,0.9);
  width: 100vw;
  height: 100vh;
  transition: opacity 0.5s, visibility 0.5s;
  ul {
    list-style-type: none;
  }

  a {
    font-size: calc(1em + 1vw);
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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
          <Link to='/'>EiT - Gruppe B</Link>
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
