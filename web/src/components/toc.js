import React from 'react'
import { StaticQuery } from "gatsby"

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
      <div>
        {
          data.site.cover && data.site.cover.asset && (
            <div>
              <img
                src={imageUrlFor(buildImageObj(data.site.cover))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .url()}
              />
            </div>
          )
        }
        {data.site._rawCoverText && <BlockContent blocks={data.site._rawCoverText || []} />}
      </div >
    )}
  />
)
