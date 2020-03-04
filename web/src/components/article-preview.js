import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'

import styled from 'styled-components'

const ArticleItem = styled.section`
`

function ArticlePreview (props) {
  console.log(props)
  return (
    <Link to={`/${props._type}/${props.slug.current}`}>
      <ArticleItem>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor(600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
        <div>
        <h1>{props.title}</h1>
        {props._rawDescription && <BlockContent blocks={props._rawDescription || []} />}

        </div>
      </ArticleItem>
      
    </Link>
  )
}

export default ArticlePreview
