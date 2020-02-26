import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import Person from './person'

function Article(props) {
  const { _rawBody, title, mainImage, authors, sources } = props
  return (
    <article>
      {props.mainImage && mainImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
      )}
      <Container>
        <div>
          <h1 >{title}</h1>
          {authors && authors.length > 0 && <Person items={authors} title={authors.length > 1 ? 'Forfattere' : 'Forfatter'} />}
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
          <ul>
            {sources && sources.map((source, index) =>
              <li key={index}>
                {source}
              </li>
            )}
          </ul>
        </div>
      </Container>
    </article>
  )
}

export default Article
