import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'

function Recipe(props) {
  const { title, ingredients, servings, preparation, _rawDescription, mainImage } = props
  return (
    <article>
      <header>
        <h1>{title}</h1>
        {_rawDescription && <BlockContent blocks={_rawDescription || []} />}

        {props.mainImage && mainImage.asset && (
          <div>
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

      </header>
      <section>
        <header>Ingredienser</header>
        {servings} Porsjoner
        <ul>
          {
            ingredients.map(ingredient => {
              const { amount, unit, name, _key } = ingredient
              return <li key={_key}>{`${amount} ${unit} ${name}`}</li>
            })
          }
        </ul>
      </section>
      <section>
        <header>Slik gjør du</header>
        <ol>
          {
            preparation.map((step, index) => (
              <li key={index}>
                {step}
              </li>
            ))
          }
        </ol>
      </section>
    </article>
  )
}

export default Recipe
