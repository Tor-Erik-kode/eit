import {Link} from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'

function ArticlePreviewGrid (props) {
  return (
    <div>
      <ul>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ArticlePreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div >
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ArticlePreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ArticlePreviewGrid
