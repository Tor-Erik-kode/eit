import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'

function Recipe(props) {
  const { title, ingredients, servings, preparation } = props
  return (
    <article>
      <header>{title}</header>
      <section>
        <header>Ingredienser</header>
        {servings} Porsjoner
        <ul>
        {
          ingredients.map(ingredient => {
            const {amount, unit, name, _key} = ingredient
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
