import { Link, StaticQuery } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const makeLinks = (content) => {
  const { __typename: typename, title, slug, _id } = content
  const type = typename.slice(6).toLowerCase()
  return <li key={_id}><Link to={`/${type}/${slug.current}`}>{title}</Link></li>
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <StaticQuery
    query={graphql`
    query NavQuery {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        toc {
          ... on SanityArticle {
            title
            slug {
              current
            }
            _id
          }
          ... on SanityQuiz {
            title
            slug {
              current
            }
            _id
          }
          ... on SanityRecipe {
            title
            slug {
              current
            }
            _id
          }
        }
      }
    }
    
    `}
    render={data => (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.branding}>
            <Link to='/'>{siteTitle}</Link>
          </div>

          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol='hamburger' />
          </button>

          <nav className={cn(styles.nav, showNav && styles.showNav)}>
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
