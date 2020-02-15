import {Link} from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'

import styles from './article-preview-grid.module.css'

function ArticlePreviewGrid (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ArticlePreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
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
