import React from 'react'
import { StaticQuery, Link } from "gatsby"

const makeLinks = (content) => {
  const { _type, title, slug, _id } = content
  return <li key={_id}><Link to={`/${_type}/${slug.current}`}>{title}</Link></li>
}

export default () => (
  <StaticQuery
    query={graphql`
    query TocQuery {
      sanitySiteSettings(_id: {eq: "siteSettings"}) {
        ...ContentQuery
      }
    }
  `}
    render={data => (
      <ul>
        {data.sanitySiteSettings.toc.map(content => makeLinks(content))}
      </ul>
    )}
  />
)
