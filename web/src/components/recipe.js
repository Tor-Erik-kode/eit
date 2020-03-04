import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import styled from 'styled-components'

const Step = styled.li`
  width: 50%;
  img {
    width: 50%;
  }
`

function Recipe(props) {
  const { title, ingredients, servings, _rawPreparation, _rawDescription, mainImage } = props
  return (
    <article>
      <header>
        <h1>{title}</h1>
        
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
        {_rawDescription && <BlockContent blocks={_rawDescription || []} />}
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
            _rawPreparation.map((step, index) => (
              <Step key={index}>
                <h2>{`steg`}</h2>
                {
                  step.image && <img
                    src={imageUrlFor(buildImageObj(step.image))
                      .width(1200)
                      .height(Math.floor((9 / 16) * 1200))
                      .fit('crop')
                      .url()}
                    alt={mainImage.alt}
                  />
                }
                <p>{step.description}</p>
              </Step>
            ))
          }
        </ol>
      </section>
    </article>
  )
}

export default Recipe
