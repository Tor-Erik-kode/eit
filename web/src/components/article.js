import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

function Article(props) {
  const { _rawBody, title, mainImage } = props
  return (
    <article>
      {props.mainImage && mainImage.asset && (
        <div >
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div>
          <div>
            <h1 >{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside >
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Article
