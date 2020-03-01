import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

function RoleList({ items, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={item._key}>
            <div>
              <div>
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
              </div>
            </div>
            <div>
              <div>
                <strong>{(item.name) || <em>Missing name</em>}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RoleList
