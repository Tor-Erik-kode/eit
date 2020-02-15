import { Link, StaticQuery } from 'gatsby'
import React from 'react'
import Icon from './icon'
import styled from 'styled-components'

export const StyledBurger = styled.button`
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
  z-index: 10;
  :focus {
    outline: none
  }
  span {
    background: black;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
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

export const StyledMenu = styled.nav`
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
  height: 100%;

  ul {
    list-style-type: none;
  }
`;

const makeLinks = (content) => {
  const { _type, title, slug, _id } = content
  return <li key={_id}><Link to={`/${_type}/${slug.current}`}>{title}</Link></li>
}

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
      <header className={className}>
        <div >
          <Link to='/'>{siteTitle}</Link>
        </div>

        <StyledBurger onClick={showNav ? onHideNav : onShowNav} open={showNav}>
          <span />
          <span />
          <span />
        </StyledBurger>

        <StyledMenu open={showNav}>
          <ul>
            {data.sanitySiteSettings.toc.map(content => makeLinks(content))}
          </ul>
        </StyledMenu>
      </header>
    )}
  />
)

export default Header
