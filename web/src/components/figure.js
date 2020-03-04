import React from 'react'

import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

import styled from 'styled-components'

const Figure = styled.figure`

`

export default ({ node }) => {
  console.log(node)
  if (!node || !node.asset || !node.asset._ref || !node.asset._ref) { return null }

  return (
    <figure>
      <img
        src={imageUrlFor(buildImageObj(node))
          .fit('crop')
          .url()}
        alt={node.alt}
      />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}