import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import Figure from './figure'
import Youtube from './youtube'

const BlockRenderer = props => {
  const {style = 'normal'} = props.node;
  
  if (style === 'funfact') {
    return <aside className="funfact">{props.children}</aside>
  }
  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const serializers = {
  types: {
    figure: Figure,
    youtube: Youtube,
    block: BlockRenderer,
  }
}

export default serializers
