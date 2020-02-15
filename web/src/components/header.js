import { Link, StaticQuery } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'

const makeLinks = (content) => {
  const { _type, title, slug, _id } = content
  return <li key={_id}><Link to={`/${_type}/${slug.current}`}>{title}</Link></li>
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <StaticQuery
    query={graphql`
    query NavQuery {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        ...ContentQuery
      }
    }
    `}
    render={data => (
      <div>
        <div >
          <div >
            <Link to='/'>{siteTitle}</Link>
          </div>

          <button  onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>

          <nav>
            <ul>
              {data.sanitySiteSettings.toc.map(content => makeLinks(content))}
              <li>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    )}
  />
)

export default Header
