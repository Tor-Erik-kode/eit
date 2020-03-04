import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const StyledCover = styled.div`
  width: 100%;

  div {
    width: 50%;
    height: 50%;
    
    img {
      object-fit: cover;
    }
    
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query CoverQuery {
        site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
          _rawCoverText
          cover {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCover>
        <div className="coverText">
          {data.site._rawCoverText && <BlockContent blocks={data.site._rawCoverText || []} />}
        </div>
        <div>
        {
          data.site.cover && data.site.cover.asset && (
            <img
              src={imageUrlFor(buildImageObj(data.site.cover))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
            />
          )
        }
        </div>
      </StyledCover>
    )}
  />
)
