import {Link} from 'gatsby'
import React from 'react'
import ArticlePreview from './article-preview'
import styled from 'styled-components'

const ArticleGrid = styled.article`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

function ArticlePreviewGrid (props) {
  return (
    <ArticleGrid>
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
    </ArticleGrid>
  )
}

ArticlePreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ArticlePreviewGrid
