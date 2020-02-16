import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

function ArticlePreview (props) {
  return (
    <Link to={`/article/${props.slug.current}`}>
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3>{props.title}</h3>
    </Link>
  )
}

export default ArticlePreview
