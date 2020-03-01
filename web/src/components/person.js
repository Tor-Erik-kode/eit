import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import styled from 'styled-components'

const List = styled.section`
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
  }

  ul {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;

    li {
      font-size: .8em;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      margin-top: 5px;
    }
  }
  

  img {
    position: relative;
    width: 3em;
    height: 3em;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
  }
`

function RoleList({ items, title }) {
  return (
    <List>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item._key}>
            {item && item.image && item.image.asset && (
              <img
                src={imageUrlFor(buildImageObj(item.image))
                  .width(100)
                  .height(100)
                  .fit('crop')
                  .url()}
                alt=''
              />
            )}
            <strong>{(item.name) || <em>Missing name</em>}</strong>
          </li>
        ))}
      </ul>
    </List>
  )
}

export default RoleList
